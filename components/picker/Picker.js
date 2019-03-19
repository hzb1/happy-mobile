import { BaseComponent, Component } from '../core'
// import * as animation from '../core/animation/index'
import * as velocity from '../core/util/velocity'
import * as touchEvent from '../core/util/touch-event'
import { ForIn } from '../core/util/util'
import { slideInUp, slideOutUp } from '../core/animation'

const PickerOptions = {
  data: [],
  value: [],
  cols: 3,
  mask: true,
  title: '',
  okText: '确定',
  dismissText: '取消',
  disabled: false,
  cascade: true,
  appendToBody: false,
  // onDismiss: () =,
  // onPickerChange: new Event(),
  indicatorStyle: {},
  hidePicker: () => null,
  confirm: (result) => null,
  cancel: () => null,
  updateNgModel: (value = []) => null,
}

// <div *ngFor="let item of dataForRender; let i = index" class="h-picker-col">
//   <div class="h-picker-col-indicator " style="top: 102px;" [ngStyle]="options.indicatorStyle"></div>
//   <div class="h-picker-col-mask" style="background-size: 100% 102px;" id={{i}}></div>
// <div class="h-picker-col-content">
// <div *ngFor="let val of item; let i = index" class="h-picker-col-item" id={{i}}>{{val.label?val.label:val}}</div>
// </div>
// </div>

const ForCol = (arr) => {
  let str = ''
  arr.forEach( (item, i) => {
    str += `<div class="h-picker-col">
              <div class="h-picker-col-indicator " ></div>
              <div class="h-picker-col-mask" id=${i}></div>
              <div class="h-picker-col-content">
                ${ForColItem(item)}
              </div>
            </div>`
  })
  return str
}

const ForColItem = (arr = []) => {
  let str = ''
  if (arr instanceof Array) {
    arr.forEach( (item, i) => {
      str += `<div class="h-picker-col-item" id=${i}>${item.label?item.label:item}</div>`
    })
  }
  return str
}


@Component({
  tag: 'h-picker',
  prop: [
    {
      name: 'data',
      type: Array,
      default: [],
    },
    {
      name: 'value',
      type: String,
      default: '',
    },
    {
      name: 'title',
      type: String,
      default: '',
    },
  ],

// <div *ngIf="options.mask" class="am-picker-popup-mask {{maskTransitionName}}" (click)="cancel()"></div>
  template(data) {
    return `
        <div class="h-picker-root" >
            <h-mask></h-mask>
            <div class="h-picker-popup h-slide-up-enter h-slide-up-enter-active" style="z-index: 1000">
              <div class="h-picker-popup-content">
                <div class="h-picker-popup-body">
                  <div>
                    <div class="h-picker-popup-header">
                      <div id="cancelButton" class="h-picker-popup-item h-picker-popup-header-left">
                        取消
                      </div>
                      <div class="h-picker-popup-item h-picker-popup-title">${data.title}</div>
                      <div id="okButton" class="h-picker-popup-item h-picker-popup-header-right"
                      >
                        确定
                      </div>
                    </div>
                    <div id="picker" class="h-picker" style="flex-direction: row; align-items: center;">
                        ${ForCol(data.dataForRender)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    `
  },
  styleUrl: require('./picker.inline.css'),
})


export default class Picker extends BaseComponent {
  static get observedAttributes() {
    return ['data', 'value']
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this.startY = 0
    this.differY = 0
    this.currentY = 0
    this.len = 0
    this.dom = null
    this.index = 0
    this.maxY = 0
    this.lineHeight = 38
    this.dataForRender = []
    this.selectedTarget = []
    this.isMouseDown = false
    this.Velocity = velocity.getVelocity()
    this.currentPicker = null

    this.options = PickerOptions

    this.render()
    this.root = this.shadowRoot.querySelector('.h-picker-root')

  }

  render() {
    this.dataForRender = [this.data]
    const template = document.createElement('template')
    template.innerHTML = `
      <style>${this.$style()}</style>
      ${this.$template(this)}
    `
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  init() {

    const pickerColMask = this.shadowRoot.querySelectorAll('.h-picker-col-mask')
    pickerColMask.forEach((col)=> {
      // panstart
      col.addEventListener('mousedown', this.panstart.bind(this), false)
      col.addEventListener('touchstart', this.panstart.bind(this), false)

      // panmove
      col.addEventListener('mousemove', this.panmove.bind(this), false)
      col.addEventListener('touchmove', this.panmove.bind(this), false)

      // panend
      col.addEventListener('mouseup', this.panend.bind(this), false)
      col.addEventListener('mouseleave', this.panend.bind(this), false)
      col.addEventListener('touchend', this.panend.bind(this), false)
    })

    const mask = this.shadowRoot.querySelector('h-mask')
    const cancelButton = this.shadowRoot.querySelector('#cancelButton')
    const okButton = this.shadowRoot.querySelector('#okButton')
    mask.addEventListener('backdrop', this.close.bind(this), false)
    cancelButton.addEventListener('click', this.close.bind(this), false)
    okButton.addEventListener('click', () => {
      this.emit('ok', this.currentPicker || this.dataForRender[0][0])
      this.close()
    }, false)
  }

  panstart(event) {
    // if (!event.target.classList.contains('h-picker-col-mask') || this.options.disabled) {
    if (!event.target.classList.contains('h-picker-col-mask') || this.options.disabled) {
      return
    }
    this.isMouseDown = true
    console.log(event)
    // event.preventDefault()
    this.dom = touchEvent.getEventTarget(event).target.parentElement.children[2]
    // console.log('dom', event)
    this.len = this.dom.children.length
    this.maxY = -(this.len - 1)

    if (this.dom.style.transform === 'translateY(0px)') {
      this.currentY = 0
      this.maxY = -(this.len - 1)
    } else if (this.selectedTarget.length > 0) {
      this.selectedTarget.forEach(item => {
        if (item.targetId === event.target.id) {
          this.currentY = item.currentY
        }
      })
    }
    this.startY = touchEvent.getEventTarget(event).clientY
  }

  panmove(event) {
    if (!event.target.classList.contains('h-picker-col-mask') || !this.isMouseDown || this.options.disabled) {
      return
    }
    event.preventDefault()
    const ev = touchEvent.getEventTarget(event)
    this.differY = ev.clientY - this.startY
    this.Velocity.record(this.differY)
    this.dom.style.transition = 'transform 0s'
    this.dom.style.transform = `translateY(${this.currentY * this.lineHeight + this.differY}px)`
  }

  panend(event) {
    if (!event.target.classList.contains('h-picker-col-mask') || !this.isMouseDown || this.options.disabled) {
      return
    }
    // this.isMouseDown = false;
    event.preventDefault()
    const ev = touchEvent.getEventTarget(event)
    this.differY = ev.clientY - this.startY
    let time = 0.3
    const velocityTemp = this.Velocity.getVelocity(this.differY) * 4

    if (velocity) {
      this.differY = velocityTemp * 40 + this.differY
      time = Math.abs(velocityTemp) * 0.1
    }
    // console.log('panend', this.dom)
    this.dom.style.transition = 'transform ' + (time < 0.3 ? 0.3 : time) + 's'
    if (this.differY <= -this.lineHeight / 2) {
      this.currentY += Math.floor(this.differY / this.lineHeight);
      if (this.currentY <= this.maxY) {
        this.currentY = this.maxY;
      }
    } else if (this.differY >= this.lineHeight / 2) {
      this.currentY += Math.floor(this.differY / this.lineHeight);
      if (this.currentY >= 0) {
        this.currentY = 0;
      }
    }
    if (this.selectedTarget.length > 0) {
      let hasKey = false;
      this.selectedTarget.forEach(item => {
        if (item.targetId === event.target.id) {
          hasKey = true;
          item.targetId = event.target.id;
          item.currentY = this.currentY;
        } else if (parseInt(item.targetId, 0) > parseInt(event.target.id, 0) && this.options.cascade) {
          item.currentY = 0;
        }
      });
      if (!hasKey) {
        this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
      }
    } else {
      this.selectedTarget.push({ targetId: event.target.id, currentY: this.currentY });
    }
    this.dom.style.transform = `translateY(${this.currentY * this.lineHeight}px)`;
    this.index = Math.floor(Math.abs(this.currentY / 1));
    this.setCurrentSelected(parseInt(event.target.id, 0), this.index);
    // if (this.options.value !== this.combineReslut()) {
    //   this.options.onPickerChange.emit(this.combineReslut());
    //   this.onChange(this.combineReslut());
    // }
  }

  setCurrentSelected(target, index) {
    this.currentPicker = this.dataForRender[target][index]
    console.log('currentPicker', this.dataForRender[target][index])
    this.emit('change', this.currentPicker)
  }

  // 打开
  open() {
    this.style.display = 'block'
    const popup = this.shadowRoot.querySelector('.h-picker-popup')
    slideInUp(popup).then(()=>{
      this.style.display = 'block'
    })
    console.log('打开...')
  }

  // 关闭
  close() {
    const popup = this.shadowRoot.querySelector('.h-picker-popup')
    slideOutUp(popup).then(() => {
      this.style.display = 'none'
      console.log('关闭中...', this)
    })
  }

  connectedCallback() {
    this.init()
    // if (this.view) this.show()
  }

  initAttribute() {
    this.setAttribute('data', this.data)
    // this.setAttribute('view', this.view)
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return
    switch (attrName) {
      case 'data':
        this.render()
        return
      case 'view':
        if (this.view) {
          this.show()
        } else {
          this.hide()
        }
    }
  }

  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }
}
