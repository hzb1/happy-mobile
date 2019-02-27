import Route from './Route.js'
const home = () => import(/* webpackChunkName: "home" */ './../page/home/home.js')
const button = () => import(/* webpackChunkName: "button" */ '../page/button/index.js')
const icon = () =>  import(/* webpackChunkName: "icon" */'./../page/icon/index.js')
const form = () =>  import(/* webpackChunkName: "form" */'./../page/form/index.js')
const img = () =>  import(/* webpackChunkName: "img" */'./../page/img/index.js')
const mask = () =>  import(/* webpackChunkName: "mask" */'./../page/mask/index.js')
const swipeAction = () =>  import(/* webpackChunkName: "swipe-action" */'./../page/swipe-action/index.js')
const toast = () =>  import(/* webpackChunkName: "toast" */'./../page/toast/index.js')

const routes = new Map([
  [ '', { path: '#home', component: home }],
  [ '#home', { path: '#home', component: home }],
  [ '#button', { path: '#button', component: button }],
  [ '#icon', { path: '#icon', component: icon }],
  [ '#form', { path: '#form', component: form }],
  [ '#img', { path: '#form', component: img }],
  [ '#mask', { path: '#mask', component: mask }],
  [ '#swipe-action', { path: '#swipe-action', component: swipeAction }],
  [ '#toast', { path: '#toast', component: toast }],
  [ '404', { path: '#home', component: home }],
  [ '*', { path: '#home', component: home }],
])

const route = new Route(routes)

export default route
