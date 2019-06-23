import Component from '../core/component'
import { MetaData, Watch } from '../core/decorator'

import styleUrl from './form.inline.css'

@MetaData({
  tag: 'h-form',
  props: [
    {
      name: 'data',
      type: Array,
      default: [],
    },
  ],
})
export default class Form extends Component {

  static get observedAttributes() {
    return ['data']
  }

  get formData() {
    const formData = {}
    this.data.forEach((item) => {
      const { name } = item
      const { value } = this.root.querySelector(`#input-${name}`)
      formData[name] = value
    })
    return formData
  }

  constructor() {
    super()
    this.root = this.shadowRoot.querySelector('div')
    this.formBox = this.root.querySelector('.form-box')
    this.form = this.root.querySelector('form')

    this.form.addEventListener('submit', (e) => {
      this.emit('submit', this.formData)
    }, true)

    // const slotContent = this.root.querySelector('#slot-content')
    // const cells = slotContent.assignedElements({flatten: true})
    // cells.forEach((item, index) => {
    //   if (index !== (cells.length - 1)) {
    //     item.classList.add('h-cell-group-item')
    //   }
    // })
    // console.log(1, slotContent.assignedElements())
    // console.log(2, slotContent.assignedElements({flatten: true}))
  }

  render() {
    return `
        <style>${styleUrl()}</style>
        <div class="${this.$tag}" >
            <form>
                <div class="form-box">
                    
                </div>
                <slot id="slot-content"></slot>
            </form>
            <!---->
        </div>
    `
  }

  connectedCallback() {
  }

  @Watch('data')
  _dataWatch(attrName, oldVal, newVal) {
    this.data.forEach((item) => {
      const { name, label, labelWidth, input, input: { defaultValue, type, placeholder, valueType } } = item

      // 生成formItem
      const formItem = document.createElement('div')
      formItem.className = 'h-form-item'
      formItem.innerHTML = `
        <div class="h-form-item-wrap">
            <div class="h-form-item-label" style="width: ${labelWidth}">
                <slot name="label-${name}">${label}</slot>
            </div>
            <div class="h-form-item-input">
                <input id="input-${name}" name="${name}" type="${type}" value="${defaultValue}" placeholder="${placeholder}">
                <slot name="input-right-${name}"></slot>
            </div>
        </div>
      `
      this.formBox.appendChild(formItem)
    })

    // submitBox
    const submitBoxSlot = document.createElement('slot')
    submitBoxSlot.name = 'submit-box'
    // submitBoxSlot.innerHTML = `
    //   <div class="submit-box">
    //     <h-button type="submit" shadow >确定</h-button>
    //     <!--<h-button color="white" shadow >重置</h-button>-->
    //   </div>
    // `
    this.formBox.appendChild(submitBoxSlot)
    this._property()
    this._initEventListener()
  }

  // 从DOM中移除时调用
  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }

  adoptedCallback() {
    console.log('adoptedCallback')
  }

  // 表单是否合法
  checkValidity() {
  }

  validation(input) {
    const {name, value} = input
    let formItem;
    this.data.forEach(item => {
      if (item.name === name) {
        formItem = item
        return
      }
    })
    const { validation, validation: {required, pattern} } = formItem
    if (required.value) {
      if (value){
        this._addValidClass(input)
      } else {
        this._addInvalidClass(input)
      }
    }
    console.log(name, value, validation)
  }

  _property() {
    this.data.forEach((item) => {
      const { name,  input: { defaultValue, valueType } } = item

      Object.defineProperty(Form.prototype, name, {
        get() {
          // const val = this.getAttribute(name)
          const input = this.formBox.querySelector(`#input-${name}`)
          if (!input) return null
          const val = input.value
          if (val === null && defaultValue !== undefined) { // 默认初始值是null 所以要返回prop.default
            return defaultValue
          }
          switch (valueType) {
            case 'string':
              return String(val)
            case 'boolean':
              return JSON.parse(val)
            case 'number':
              return Number(val)
            case 'array':
              return JSON.parse(val)
            case 'object':
              return JSON.parse(val)
            default:
              return val
          }
        },
        set(val) {
          const input = this.formBox.querySelector(`#input-${name}`)
          if (!input) return null
          // if (typeof val === 'string') {
          //   input.value = val
          //   // this.setAttribute(name, val)
          //   return
          // }
          input.value = JSON.stringify(val)
          // this.setAttribute(name, JSON.stringify(val))
        },
      })
    })
  }

  _initEventListener() {
    const inputs = [...this.formBox.querySelectorAll('input')]
    console.log(inputs)
    // const addDirtyClass = (input) => {
    //   input.classList.toggle('dirty', true)
    // }
    inputs.forEach((input) => {
      input.addEventListener('blur', () => {
        this.validation(input)
      } );
      // input.addEventListener('invalid', addDirtyClass.bind(this, input));
      // input.addEventListener('valid', addDirtyClass.bind(this, input));
    })
  }

  // _addDirtyClass(input) {
  //   input.classList.toggle('dirty', true)
  // }

  _addValidClass(input) {
    const hFormItem = input.closest('.h-form-item')
    hFormItem.classList.add('valid')
    hFormItem.classList.remove('invalid')
  }

  _addInvalidClass(input) {
    const hFormItem = input.closest('.h-form-item')
    hFormItem.classList.toggle('valid', false)
    hFormItem.classList.toggle('invalid', true)
  }

}
