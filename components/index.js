import { version } from '../package'
import './theme.scss'
import './form/form.scss'

import Button from './button'
import Icon from './icon'
import Img from './img'
import Toast from './toast'
import Popover from './popover'
import SwipeAction from './swipe-action'
import Carousel from './carousel'
import Mask from './mask'
import AppBar from './app-bar/AppBar'
import Accordion from './accordion/Accordion'
import Select from './select/Select'
import Picker from './picker'

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
  AppBar,
  Select,
  Picker,
  Accordion,
}

if (typeof window !== 'undefined' || !window.happy) {
  const happyArr = Object.values(happy)
  happyArr.forEach((item) => {
    if (typeof item.register === 'function') item.register()
  })
}

export default happy
