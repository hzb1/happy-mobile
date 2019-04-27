
import '../demo.css'
import route from './route/index.js'
import './components/app-table'
// import store from './store/index.js'

const { hash } = window.location
route.push(hash)
