
import hljs from 'highlight.js'
// import hljs from 'highlight.js/lib/highlight';
// import 'highlight.js/styles/idea.css';
// import 'highlight.js/styles/xcode.css';
// import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/atelier-cave-dark.css'
import 'highlight.js/styles/github-gist.css'
// import javascript from 'highlight.js/lib/languages/javascript';
// import html from 'highlight.js/lib/languages/vbscript-html';
// hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('html', html);

const _c = '../../../components'

// import intro from '../pages/intro/index.md'

const introPage = () => import('../pages/intro/index.md')
const buttonPage = () => import('../../../components/button/doc/index.md')
const iconPage = () => import('../../../components/icon/doc/index.md')
const maskPage = () => import('../../../components/mask/doc/index.md')
const swipeActionPage = () => import('../../../components/swipe-action/doc/index.md')
const carouselPage = () => import('../../../components/carousel/doc/index.md')
const lazyImgPage = () => import('../../../components/lazy-img/doc/index.md')
const toastPage = () => import('../../../components/toast/doc/index.md')
const switchPage = () => import('../../../components/switch/doc/index.md')
const sliderPage = () => import('../../../components/slider/doc/index.md')
const checkboxPage = () => import('../../../components/checkbox/doc/index.md')
const pickerPage = () => import('../../../components/picker/doc/index.md')
const pullRefreshPage = () => import('../../../components/pull-refresh/doc/index.md')
const searchBarPage = () => import('../../../components/search-bar/doc/index.md')


class ComponentContainer extends HTMLElement {

  getPage() {
    const path = this.path
    switch (path) {
      case '#intro':
        return introPage
      case '#button':
        return buttonPage
      case '#icon':
        return iconPage
      case '#mask':
        return maskPage
      case '#swipe-action':
        return swipeActionPage
      case '#carousel':
        return carouselPage
      case '#lazy-img':
        return lazyImgPage
      case '#toast':
        return toastPage
      case '#switch':
        return switchPage
      case '#slider':
        return sliderPage
      case '#checkbox':
        return checkboxPage
      case '#picker':
        return pickerPage
      case '#pull-refresh':
        return pullRefreshPage
      case '#search-bar':
        return searchBarPage
      default:
        console.error('404了')
        return introPage
    }
  }

  static get observedAttributes() {
    return ['path']
  }

  get path() {
    return this.getAttribute('path')
  }

  set path(value) {
    this.setAttribute('path', value)
  }

  connectedCallback() {
    const { hash } = window.location
    this.path = hash
    // this.render()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case 'path':
        this.render()
        break
      default:
    }
  }

  async render() {
    const res = await this.getPage()()
    const html = res.default
    // console.log(html, 'res')
    this.innerHTML = `
    <style>
            .demo-code-container{
                width: 100%;
                font-size: 16px;
                line-height: 1.5em;
                box-sizing: border-box;
                color: #333333;
                background-color: white;
                padding: 18px 18px 50px;
                /*padding-bottom: 50px;*/
            }
            .demo-code-container > h1{
                text-align: left;
                font-size: 28px;
                line-height: 2em;
                font-weight: 500;
                color: #000;
            }
            .demo-code-container > h2{
                text-align: left;
                font-size: 20px;
                font-weight: 500;
                margin: 1.6em 0 .6em;
            }
            .demo-code-container > h3{
                text-align: left;
                font-size: 15px;
                font-weight: 500;
                margin: 1.6em 0 .4em;
            }
            .demo-code-container > p{
                font-size: 13px;
                color: #666;
                /*margin-bottom: .4em;*/
            }
            .demo-code-container a{
                font-size: inherit;
                color: var(--h-theme-primary);
                text-decoration: underline;
                margin: 0 .2em;
            }
            .demo-code-container ul{
                border-radius: 4px;
                font-size: 14px;
                padding: 0 14px;
            }
            .demo-code-container ul li{
                list-style: circle;
                margin-left: 14px;
            }
            .demo-code-container > pre{
                line-height: 1.5em;
            }
            .demo-code-container .hljs {
                background: #f5f5f5;
            }
            .demo-code-container > pre > code{
                border-radius: 4px;
                padding: 10px 14px;
            }
            .demo-code-container table{    
                border-collapse: collapse;
                border-spacing: 0;
                empty-cells: show;
                width: 100%;
                /*border: 1px solid #eeeeee;*/
                text-align: left;
                font-size: 14px;
                box-sizing: border-box;
            }
            
            .demo-code-container table th {
                padding: 8px 10px;
                text-align: left;
                font-weight: 500;
            }
            
            .demo-code-container table td {
                padding: 8px;
                border-top: 1px solid #eeeeee;
            }
            
            .demo-code-container table th:first-child,
            .demo-code-container table td:first-child, {
                padding-left: 0;
            }
            .demo-code-container thead{
                line-height: 2em;
                font-weight: normal;
            }
            .demo-code-container table tr {
                padding: 6px;
                box-sizing: border-box;
                text-align: left;
            }
            .demo-code-container > table th {
                white-space: pre-wrap;
                color: #000;
            }
            .demo-code-container tbody tr td:first-child {
                color: #000;
            }
            .demo-code-container tbody tr td:last-child {
                /*font-size: 12px;*/
            }
            .demo-code-container tbody tr td:nth-child(2) {
                 /*text-transform: capitalize;*/
                 /*color: #990055;*/
            }
            .demo-code-container > p code, 
            .demo-code-container > table code {
                    display: inline-block;
                    background-color: #f5f5f5;
                    padding: 0 .5em;
                    /*font-size: 14px;*/
                    line-height: 1.4em;
                    border-radius: 4px;
                    color: #ff5722;
                    /*margin: .2em .2em .2em;*/
            }
            .demo-code-container .hljs-section, .hljs-name{
                color: var(--h-theme-primary);
            }
          </style>
          <div class="demo-code-container">
            ${html}
          </div>
           `
    this.querySelectorAll('pre code')
    .forEach((block) => {
      hljs.highlightBlock(block)
    })
    // window.hljs.initHighlightingOnLoad();
  }
}

if (!window.customElements.get('component-container')) {
  window.customElements.define('component-container', ComponentContainer)
}

export default ComponentContainer
