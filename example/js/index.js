
import '../demo.css'
import '../../dist/happy-mobile.css'
import happy from '../../dist/happy-mobile.js'
import route from './route/index.js'
import './components/app-table'

window.happy = happy
// import store from './store/index.js'

const { hash } = window.location
route.push(hash)
