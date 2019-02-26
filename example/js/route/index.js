import Route from './Route.js'
const home = () => import(/* webpackChunkName: "home" */ './../page/home/home.js')
const button = () => import(/* webpackChunkName: "button" */ './../page/button/index.js')
const icon = () =>  import(/* webpackChunkName: "icon" */'./../page/icon/index.js')

const routes = new Map([
  [ '#home', { path: '#home', component: home }],
  [ '#button', { path: '#button', component: button }],
  [ '#icon', { path: '#icon', component: icon }],
  [ '', { path: '#home', component: home }],
  [ '404', { path: '#home', component: home }],
])

const route = new Route(routes)

export default route
