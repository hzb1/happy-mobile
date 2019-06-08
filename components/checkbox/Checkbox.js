import { MetaData, Watch, Component } from '../core'

@MetaData({
  tag: 'h-checkbox',
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
  styleUrl: require('./checkbox.inline.css'),
})
export default class Checkbox extends Component{
  static get observedAttributes() {
    return ['value']
  }

  constructor(){
    super()
    this.root = this.shadowRoot.querySelector('#h-checkbox')
  }

  render() {
    return `
        <style>${this.$style()}</style>
        <div id="h-checkbox" class="h-checkbox">
            ${this.value ? `<h-icon type="check-circle" class="h-checked-true"></h-icon>` : `<i class="h-checked-false"></i>`}
        </div>
    `
  }

  connectedCallback() {
    this.initMethod()
    this._listener()
    this.initAttribute()
  }

  initMethod() {
    if (this.name) {
        const form = this.closest('form');
        if (form) {
          const fakeInput = document.createElement('input');
          fakeInput.name = this.name;
          fakeInput.type = 'checkbox';
          fakeInput.value = this.value;
          // fakeInput.style.display = 'none';
          form.appendChild(fakeInput);
        }
    }
  }

  initAttribute() {
    this.setAttribute('checked', this.value)

  }

  _listener() {
    this.root.addEventListener('click', () => {
      this.value = !this.value
    })
  }

  @Watch('value')
  _valueWatch(attrName, oldVal, newVal) {
    this.root.innerHTML = `${this.value ? `<h-icon type="check-circle" class="h-checked-true"></h-icon>` : `<i class="h-checked-false"></i>`}`
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
