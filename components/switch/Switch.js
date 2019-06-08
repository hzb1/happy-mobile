
import { MetaData, Watch, Component } from '../core'

const style = require('./switch.inline.css')
@MetaData({
  tag: 'h-switch',
  props: [
    {
      name: 'value',
      type: Boolean,
      default: false,
    },
    {
      name: 'name',
      type: String,
      default: '',
    },
  ],
})
export default class Switch extends Component{
  static get observedAttributes() {
    return ['value']
  }

  constructor(){
    super()
    this.root = this.shadowRoot.querySelector('#h-switch')
  }

  render() {
    return `
        <style>${style()}</style>
        <div id="h-switch" class="h-switch ${this.value ? 'checked' : ''}">
            <div class="h-switch-box"></div>
        </div>
    `
  }

  connectedCallback() {

    this.initMethod()
    this._listener()
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
    switchBox.addEventListener('click', () => this.value = !this.value)
  }

  @Watch('value')
  _valueWatch(attrName, oldVal, newVal) {
    this.root.classList.toggle('checked', this.value)
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
