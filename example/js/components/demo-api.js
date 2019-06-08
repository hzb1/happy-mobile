class DemoApi extends HTMLElement {
  get name() {
    return this.getAttribute('name')
  }

  set name(value) {
    this.setAttribute('name', value)
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <div class="demo-api-wrap">
          <style>
            .demo-api > h3{
                text-align: left;
                font-size: 14px;
                font-weight: 500;
                margin: 0 0 .5em;
            }
            .demo-api{
                width: 100%;
                margin: 12px auto;
                font-size: 12px;
                padding: 1em;
                box-sizing: border-box;
                color: #333333;
            }
            .demo-api table{    
                border-collapse: collapse;
                border-spacing: 0;
                empty-cells: show;
                width: 100%;
                display: block;
                border-left: 1px solid #eeeeee;
                border-right: 1px solid #eeeeee;
                font-size: 14px;
                margin-bottom: 28px;
            }
            .demo-api thead{
                background-color: #eeeeee;
                font-size: 14px;
                line-height: 1.8em;
                font-weight: normal;
                display: block;
            }
            .demo-api thead,
            .demo-api tbody{
                display: block;
            }
            .demo-api thead tr,
            .demo-api tbody tr{
                display: flex;
            }
            .demo-api thead tr th,
            .demo-api tbody td{
                flex: 1 0;
                /*min-width: 25%;*/
            }
            .demo-api table tr {
                border-bottom: 1px solid #eeeeee;
                padding: 6px;
                box-sizing: border-box;
                text-align: left;
                display: flex;
                align-items: center;
            }
            .demo-api > table th {
                white-space: pre-wrap;
                color: #000;
                font-weight: 400;
            }
            .demo-api tbody tr td:first-child {
                color: #000;
                /*font-weight: 500;*/
            }
            .demo-api tbody tr td:last-child {
                font-size: 12px;
            }
            .demo-api tbody tr td:nth-child(2) {
                 /*text-transform: capitalize;*/
                 color: #990055;
            }
            .demo-api > table code {
                    display: inline-block;
                    background-color: #eeeeee;
                    padding: 0 .5em;
                    font-size: 12px;
                    line-height: 1.4em;
                    border-radius: 4px;
                    margin: .2em .2em .2em;
            }
          </style>
          <div class="demo-api">
            ${this.innerHTML}
          </div>
      </div>
    `
  }
}

if (!window.customElements.get('demo-api')) {
  window.customElements.define('demo-api', DemoApi)
}

export default DemoApi
