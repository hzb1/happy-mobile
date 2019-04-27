const headerType = new Map([
  ['attribute', [
    { key: 'name', label: '属性名称' },
    { key: 'type', label: '类型' },
    { key: 'value', label: '值' },
    { key: 'explain', label: '说明' },
  ]],
  ['method', [
    { key: 'name', label: '方法名称' },
    { key: 'backValue', label: '返回值' },
    { key: 'explain', label: '说明' },
  ]],
  ['event', [
    { key: 'name', label: '事件名称' },
    { key: 'backValue', label: '回调参数' },
    { key: 'explain', label: '说明' },
  ]],
  ['slot', [
    { key: 'name', label: '插槽名称' },
    { key: 'explain', label: '说明' },
  ]],
])

const bodyItemArray = (items, name) => {
  if (items instanceof Array) {
    return `
      <div class="${name}-array">${items.map(item => `<span>${item}</span>`)
  .join('')}</div>
    `
  }
  return `<div class="${name}">${items}</div>`
}

class AppTable extends HTMLElement {
  static get observedAttributes() {
    return ['data']
  }

  get type() {
    return this.getAttribute('type') || 'attribute'
  }

  set type(value) {
    this.setAttribute('type', value)
  }

  get data() {
    return JSON.parse(this.getAttribute('data')) || []
  }

  set data(value) {
    this.setAttribute('data', JSON.stringify(value))
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `${this.render()}`
  }

  render() {
    return `
        <style>
            .h-table{
                width: 100%;
                margin: 12px auto;
                font-size: 12px;
                padding: 1em;
                box-sizing: border-box;
                /*text-align: center;*/
                color: #333333;
            }
            .h-table-title{
                text-align: left;
                font-size: 16px;
                font-weight: 500;
                margin: 0 0 .4em;
            }
            .h-table-header{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                justify-content: space-around;
                align-items: center;
                background-color: #eeeeee;
            }
            .h-table-header .head-item{
                box-sizing: border-box;
                font-size: 14px;
                height: 2.4em;
                /*text-align: center;*/
                line-height: 2.4em;
                /*padding-left: 2em;*/
            }
            .h-table-header,
            .h-table-body{
                padding: 0 12px;
            }
            .h-table-body{
                display: grid;
                /*grid-row-gap: 6px;*/
                background-color: #fdfdfd;
            }
            .h-table-body .body-item{
                display: grid;
                grid-template-columns: 1fr 1fr minmax(2em, 1fr) 1fr;
                grid-template-rows: minmax(2em, auto);
                /*grid-auto-columns: auto;*/
                /*grid-auto-flow: column;*/
                
                /*display: flex;*/
                justify-content: space-around;
                align-items: center;
                flex-wrap: nowrap;
                line-height: 1.4em;
                /*grid-row-gap: 4px;*/
                border-bottom: 1px solid #eeeeee;
                padding-top: 4px;
                padding-bottom: 4px;
            }
            .h-table-body .body-item .name{
                font-size: 14px;
                font-weight: 500;
            }
            .h-table-body .body-item .type{
                color: darkmagenta;
            }
            .h-table-body .body-item .type,
            .h-table-body .body-item .backValue{
                text-transform: capitalize;
            }
            .h-table-body .body-item .value,
            .h-table-body .body-item .value-array span:first-child{
                color: var(--h-theme-primary, #1f78ff);
            }
            
            .value-array span{
                display: inline-block;
                background-color: #eeeeee;
                padding: 0 .5em;
                font-size: 12px;
                line-height: 1.4em;
                border-radius: 4px;
                margin: .2em .2em .2em;
            }
            .h-table-method .h-table-header,
            .h-table-event .h-table-header{
                grid-template-columns: repeat(2, 1fr) 2fr;
            }
            .h-table-method .h-table-body .body-item,
            .h-table-event .h-table-body .body-item{
                grid-template-columns: repeat(2, 1fr) 2fr;
            }
            .h-table-slot .h-table-header{
                grid-template-columns: 1fr 3fr;
            }
            .h-table-slot .h-table-body .body-item{
                grid-template-columns: 1fr 3fr;
            }
        </style>
        <div class="h-table h-table-${this.type}" >
            ${this._buildTitle()}
            ${this._buildHead()}
            ${this._buildBody()}
        </div>
    `
  }

  connectedCallback() {
    this.setAttribute('data', this.data)
    this.firstLoad = true
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return
    switch (attrName) {
      case 'data':
        this._watchData()
        break
      default:
    }
  }

  _watchData() {
    this.shadowRoot.innerHTML = `${this.render()}`
  }

  _buildTitle() {
    return `<h4 class="h-table-title">${this.type}</h4>`
  }

  _buildHead() {
    return `
      <div class="h-table-header">
        ${headerType.get(this.type).map(headItem => `<div class="head-item">${headItem.label}</div>`)
    .join('')}
       </div>
    `
  }

  _buildBody() {
    return `<div class="h-table-body">
      ${this.data.map(bodyItem => `${this._buildBodyItem(bodyItem)}`).join('')}
    </div>`
  }

  _buildBodyItem(bodyItem) {
    const header = headerType.get(this.type)
    return `
        <div class="body-item">
            ${header.map(item => this._buildBodyItemArr(bodyItem, item)).join('')}
        </div>
    `
  }

  // eslint-disable-next-line class-methods-use-this
  _buildBodyItemArr(bodyItem, item) {
    if (bodyItem[item.key] instanceof Array) {
      return `
      <div class="${item.key}-array">${bodyItem[item.key].map(it => `<span>${it}</span>`).join('')}</div>
    `
    }
    return `<div class="${item.key}">${bodyItem[item.key]}</div>`
  }
}

if (!window.customElements.get('app-table')) {
  window.customElements.define('app-table', AppTable)
}

export default AppTable
