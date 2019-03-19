import transition from './transition'
import 'web-animations-js'
/**
 * 动画函数
 * @param name 动画名称
 * @param element 元素
 * @param param 参数
 * @returns {Promise<element>}
 */
const animation = (name, element, param) => {
  const defParam = {
    duration: 325, display: 'block', easing: 'ease', fill: 'both',
  }
  return new Promise((resolve) => {
    const {
      duration, display, easing, fill,
    } = { ...defParam, ...param }
    const oldDisplay = element.style.display
    if (oldDisplay === 'none') element.style.display = 'block'
    const player = element.animate(transition[name], {
      duration,
      easing,
      fill, // none both backwards forwards
      // composite: 'add',
    })
    player.addEventListener('finish', () => {
      resolve(element)
    })
  })
}

// 淡入淡出
const fadeIn = (element, param = {}) => animation('fadeIn', element, param)
const fadeOut = (element, param = {}) => animation('fadeOut', element, param)

// 淡入淡出
const fadeInDown = (element, param = {}) => animation('fadeInDown', element, param)
const fadeOutDown = (element, param = {}) => animation('fadeOutDown', element, param)

// 向上滑动
const slideInUp = (element, param = {}) => animation('slideInUp', element, param)
const slideOutUp = (element, param = {}) => animation('slideOutUp', element, param)

// 向下滑动
const slideInDown = (element, param = {}) => animation('slideInDown', element, param)
const slideOutDown = (element, param = {}) => animation('slideOutDown', element, param)


// 向左滑动
const slideInLeft = (element, param = {}) => animation('slideInLeft', element, param)
const slideOutLeft = (element, param = {}) => animation('slideOutLeft', element, param)

// 向右滑动
const slideInRight = (element, param = {}) => animation('slideInRight', element, param)
const slideOutRight = (element, param = {}) => animation('slideOutRight', element, param)

export {
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
