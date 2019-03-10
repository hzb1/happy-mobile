import { version } from '../package'
import './theme.scss'
import './form/form.scss'

import Button from './button'
import Icon from './icon'
import Img from './img'
import Toast from './toast'
import SwipeAction from './swipe-action'
import Carousel from './carousel'
import Mask from './mask'
import AppBar from './app-bar/AppBar'

const happy = {
  version,
  Button,
  Icon,
  Img,
  Toast,
  Mask,
  SwipeAction,
  Carousel,
  AppBar,
}

if (typeof window !== 'undefined' || !window.happy) {
  const happyArr = Object.values(happy)
  happyArr.forEach((item) => {
    if (typeof item.register === 'function') item.register()
  })
}

export default happy
