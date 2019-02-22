
// if
const mIf = (bool, backValue) => {
  if (bool) {
    return backValue
  }
  return ''
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

export {
  mIf,
  toHump,
  propToObj,
}
