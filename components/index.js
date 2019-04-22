
// import 'core-js'
import 'core-js/stable'
// import 'core-js-pure/stable'
import { version } from '../package'
import './theme.scss'
import './form/form.scss'

import Button from './button'
import Icon from './icon'
import Img from './img'
import Toast from './toast'
import Popover from './popover'
import SwipeAction from './swipe-action'
import { Carousel, CarouselItem } from './carousel/index'
import Mask from './mask'
import AppBar from './app-bar'
import Accordion from './accordion'
import Picker from './picker'
import Switch from './switch'
import Slider from './slider'
import Checkbox from './checkbox'
import Select from './select'

const happy = {
  version,
  Button,
  Icon,
  Img,
  Toast,
  Popover,
  Mask,
  SwipeAction,
  Carousel,
  CarouselItem,
  AppBar,
  Picker,
  Accordion,
  Switch,
  Slider,
  Checkbox,
  Select,
}

if (typeof window !== 'undefined' || !window.happy) {
  const happyArr = Object.values(happy)
  happyArr.forEach((item) => {
    if (typeof item.register === 'function') item.register()
  })
}

export default happy
