
import route from './route/index.js'
import store from './store/index.js'

const { hash } = window.location
route.push(hash)
