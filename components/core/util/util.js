
const isStatusValid = status => status <= 299

// if
const Html = (val, li) => {
  console.log(val.join(''), li)
  return val.join('')
}

// if
const If = (bool, backValue) => {
  if (bool) {
    return backValue
  }
  return ''
}
// ForIn
const ForIn = (data, s) => {
//   console.log(data, s)
//   let str = ''
//   data.forEach((item) => {
//     str += `${s}`
//   })
//   return str
}

/**
 * 中划线转小驼峰
 * @param str
 * @returns {string}
 */
const toHump = (str) => {
  const arr = str.split('-')
  for (let i = 1; i < arr.length; i += 1) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
  }
  return arr.join('')
}

/**
 * prop转成对象
 * @param prop
 */
const propToObj = (prop) => {
  const obj = {}
  prop.forEach((item) => {
    obj[item.name] = item
  })
  return obj
}

/**
 * 获取事件对象的x和y
 * @param ev
 */
const getEventXY = (ev) => {
  const point = {}
  if (ev.targetTouches) {
    point.x = ev.targetTouches[0].clientX
    point.y = ev.targetTouches[0].clientY
  } else {
    // 鼠标事件或指针事件
    point.x = ev.clientX
    point.y = ev.clientY
  }
  return point
}

export {
  isStatusValid,
  If,
  ForIn,
  toHump,
  Html,
  propToObj,
  getEventXY,
}
