/**
 * opacity有Bug！
 */

/**
 * fade 透明度变化
 */
const fadeIn = [
  { opacity: 0 },
  { opacity: 1 },
]
const fadeOut = [
  { opacity: 1 },
  { opacity: 0 },
]

const fadeInDown = [
  { opacity: '0', transform: 'translateY(-100%)' },
  { opacity: '1', transform: 'translateY(0)' },
]
const fadeOutDown = [
  { opacity: '1', transform: 'translateY(0)' },
  { opacity: '0', transform: 'translateY(-100%)' },
]

/**
 * slide 滑动
 */
const slideInUp = [
  { transform: 'translate3d(0,100%,0)' },
  // { transform: 'translateZ(0)' },
  { transform: 'translate3d(0,0,0)' },
]
const slideOutUp = [
  // { transform: 'translateZ(0)' },
  { transform: 'translate3d(0,0,0)' },
  { transform: 'translate3d(0,100%,0)' },
]

const slideInDown = [
  { transform: 'translate3d(0,-100%,0)' },
  { transform: 'translateZ(0)' },
]
const slideOutDown = [
  { transform: 'translateZ(0)' },
  { transform: 'translate3d(0,-100%,0)' },
]

const slideInLeft = [
  { transform: 'translate3d(-100%,0,0)' },
  { transform: 'translateZ(0)' },
]
const slideOutLeft = [
  { transform: 'translateZ(0)' },
  { transform: 'translate3d(-100%,0,0)' },
]

const slideInRight = [
  { transform: 'translate3d(100%,0,0)' },
  { transform: 'translateZ(0)' },
]
const slideOutRight = [
  { transform: 'translateZ(0)' },
  { transform: 'translate3d(100%,0,0)' },
]

export const transitionMap = new Map([
  ['fade', { In: 'fadeIn', Out: 'fadeOut' }],
  ['fadeDown', { In: 'fadeInDown', Out: 'fadeOutDown' }],
  ['slideUp', { In: 'slideInUp', Out: 'slideOutUp' }],
  ['slideDown', { In: 'slideInDown', Out: 'slideOutDown' }],
  ['slideRight', { In: 'slideInRight', Out: 'slideOutRight' }],
])


export default {
  fadeIn,
  fadeOut,

  fadeInDown,
  fadeOutDown,

  slideInUp,
  slideOutUp,

  slideInDown,
  slideOutDown,

  slideInLeft,
  slideOutLeft,

  slideInRight,
  slideOutRight,
}
