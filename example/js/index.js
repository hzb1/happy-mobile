
import '../demo.css'
// import '../../dist/happy-mobile.css'
import happy from '../../dist/happy-mobile'
// import Button from 'happy-mobile/dist/button/button'
// import Button from '../../dist/button/button'
import route from './route/index.js'
import './components'

// console.log('Button', Button)
window.happy = happy
// import store from './store/index.js'

const { hash } = window.location
route.push(hash)
