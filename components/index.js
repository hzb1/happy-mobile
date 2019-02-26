import { version } from '../package'
import './theme.scss'
import './form/form.scss'

import Button from './button'
import Icon from './icon'
import Img from './img'
import Toast from './toast'
import Grid from './grid'
import SwipeAction from './swipe-action'
import Mask from './mask'

const happy = {
  version,
  Button,
  Icon,
  Img,
  Grid,
  Toast,
  Mask,
  SwipeAction,
}

if (typeof window !== 'undefined' || !window.happy) {
  const happyArr = Object.values(happy)
  happyArr.forEach((item) => {
    if (typeof item.register === 'function') item.register()
  })
}

export default happy
