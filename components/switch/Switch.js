import BaseComponent from '../core/base-component'
import Component from '../core/web-component'

@Component({
  tag: 'h-switch',
  prop: [
    {
      name: 'value',
      type: Boolean,
      has: true,
      default: false,
    },
    {
      name: 'name',
      type: String,
      default: '',
    },
  ],
  styleUrl: require('./switch.inline.css'),
})
export default class Switch extends BaseComponent{
  static get observedAttributes() {
    return ['value']
  }

  constructor(){
    super()
    this.root = this.shadowRoot.querySelector('#h-switch')
  }

  render() {
    return `
        <style>${this.$style()}</style>
        <div id="h-switch" class="h-switch ${this.value ? 'checked' : ''}">
            <div class="h-switch-box"></div>
        </div>
    `
  }

  connectedCallback() {
    if (!this.firstLoad){
      this.initMethod()
      // this.initClass()
      this._listener()
      this.firstLoad = true
    }
    this.initAttribute()
    // console.log(this.value)
  }

  initMethod() {
    if (this.name) {
        const form = this.closest('form');
        if (form) {
          const fakeInput = document.createElement('input');
          fakeInput.name = this.name;
          fakeInput.type = 'checkbox';
          fakeInput.value = this.value;
          fakeInput.style.display = 'none';
          form.appendChild(fakeInput);
          // fakeButton.remove();
          // console.log('form', form)
        }
    }
  }

  initAttribute() {
    this.setAttribute('checked', this.value)

  }

  _listener() {
    const switchBox = this.root.querySelector('.h-switch-box')
    switchBox.addEventListener('click', () => {
      this.value = !this.value
    })
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    // console.log(oldVal, 'data 变化', newVal)
    if (!this.firstLoad) return
    switch (attrName) {
      case 'value':
        this._watchValue()
    }
  }

  _watchValue() {
    this.root.classList.toggle('checked')
    this.emit('change', this.value)
    if (this.name) {
      const form = this.closest('form');
      if (form) {
        if (form[this.name]) {
          form[this.name].value = this.value
        } else {
          console.error(`${this.tagName}change事件出错`)
        }
      }
    }
  }

}
