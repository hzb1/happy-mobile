import BaseComponent from '../core/base-component'
import Component from '../core/web-component'

@Component({
  tag: 'h-checkbox',
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
  styleUrl: require('./checkbox.inline.css'),
})
export default class Checkbox extends BaseComponent{
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
    if (!this.firstLoad){
      this.initMethod()
      // this.initClass()
      this._listener()
      this.firstLoad = true
    }
    this.initAttribute()
    console.log(this.value)
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

  attributeChangedCallback(attrName, oldVal, newVal) {
    // console.log(oldVal, 'data 变化', newVal)
    if (!this.firstLoad) return
    switch (attrName) {
      case 'value':
        this._watchValue()
    }
  }

  _watchValue() {
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
