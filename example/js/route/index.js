import Route from './Route.js'
const home = () => import(/* webpackChunkName: "home" */ './../page/home/home.js')

const button = () => import(/* webpackChunkName: "button" */ '../page/button/index.js')
const icon = () =>  import(/* webpackChunkName: "icon" */'./../page/icon/index.js')
const mask = () =>  import(/* webpackChunkName: "mask" */'./../page/mask/index.js')

const img = () =>  import(/* webpackChunkName: "img" */'./../page/img/index.js')
const swipeAction = () =>  import(/* webpackChunkName: "swipe-action" */'./../page/swipe-action/index.js')
const carousel = () =>  import(/* webpackChunkName: "carousel" */'./../page/carousel/index.js')
const appBar = () =>  import(/* webpackChunkName: "app-bar" */'./../page/app-bar/index.js')
const toast = () =>  import(/* webpackChunkName: "toast" */'./../page/toast/index.js')
const popover = () =>  import(/* webpackChunkName: "popover" */'./../page/popover/index.js')
const accordion = () =>  import(/* webpackChunkName: "accordion" */'./../page/accordion/index.js')

const form = () =>  import(/* webpackChunkName: "form" */'./../page/form/index.js')
const select = () =>  import(/* webpackChunkName: "select" */'./../page/select/index.js')
const switchs = () =>  import(/* webpackChunkName: "switch" */'./../page/switch/index.js')
const slider = () =>  import(/* webpackChunkName: "slider" */'./../page/slider/index.js')
const checkbox = () =>  import(/* webpackChunkName: "checkbox" */'./../page/checkbox/index.js')
const picker = () =>  import(/* webpackChunkName: "picker" */'../page/picker/index.js')
const pullRefresh = () =>  import(/* webpackChunkName: "picker" */'../page/pull-refresh/index.js')

const searchBar = () =>  import(/* webpackChunkName: "app-search-bar" */'../page/search-bar/index.js')

const routes = new Map([
  [ '', { path: '#home', component: home }],
  [ '#home', { path: '#home', component: home }],

  // 基础
  [ '#button', { path: '#button', component: button }],
  [ '#icon', { path: '#icon', component: icon }],

  // 表单
  [ '#form', { path: '#form', component: form }],
  [ '#select', { path: '#select', component: select }],
  [ '#switch', { path: '#switch', component: switchs }],
  [ '#slider', { path: '#slider', component: slider }],
  [ '#checkbox', { path: '#checkbox', component: checkbox }],
  [ '#picker', { path: '#picker', component: picker }],
  [ '#lazy-img', { path: '#form', component: img }],

  [ '#mask', { path: '#mask', component: mask }],
  [ '#carousel', { path: '#carousel', component: carousel }],
  [ '#app-bar', { path: '#app-bar', component: appBar }],
  [ '#swipe-action', { path: '#swipe-action', component: swipeAction }],
  [ '#toast', { path: '#toast', component: toast }],
  [ '#popover', { path: '#popover', component: popover }],
  [ '#accordion', { path: '#accordion', component: accordion }],
  [ '#pull-refresh', { path: '#pull-refresh', component: pullRefresh }],

  [ '#search-bar', { path: '#search-bar', component: searchBar }],

  [ '404', { path: '#home', component: home }],
  [ '*', { path: '#home', component: home }],
])

const route = new Route(routes)
window.route = route

export default route
