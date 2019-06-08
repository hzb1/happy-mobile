
// import 'core-js'
// import 'core-js/stable'
// import 'core-js-pure/stable'
import { version } from '../package'
import './theme.scss'
// import './form/form.scss'

import Button from './button'
import Icon from './icon'
import LazyImg from './lazy-img'
import Toast from './toast'
// import Popover from './popover'
import SwipeAction from './swipe-action'
// import Swipe from './swipe'
import Carousel from './carousel'
import Mask from './mask'
// import AppBar from './app-bar'
// import Accordion from './accordion'
import Picker from './picker'
import Switch from './switch'
import Slider from './slider'
import Checkbox from './checkbox'
// import Select from './select'
import PullRefresh from './pull-refresh'
import SearchBar from './search-bar'

const happy = {
  version,
  Button,
  Icon,
  LazyImg,
  Toast,
  // Popover,
  Mask,
  SwipeAction,
  Carousel,
  // CarouselItem,
  // AppBar,
  Picker,
  // Accordion,
  Switch,
  Slider,
  Checkbox,
  // Select,
  // Swipe,
  PullRefresh,
  SearchBar,
}

if (typeof window !== 'undefined' || !window.happy) {
  const happyArr = Object.values(happy)
  happyArr.forEach((item) => {
    if (typeof item.register === 'function') item.register()
  })
}

export default happy
