import { propToObj } from './util/util'

// 元数据
const MetaData = ({
  tag = '',
  props = [],
  styleUrl,
}) => (Target) => {
  Target.prototype.$tag = tag
  if (styleUrl) Target.prototype.$style = styleUrl
  const propObj = propToObj(props)

  // 把props绑定到属性上 单向绑定
  props.forEach(({ name, type = String, has = false }) => {
    const prop = propObj[name]
    Object.defineProperty(Target.prototype, name, {
      get() {
        const val = this.getAttribute(name)
        if (val === null && prop.default !== undefined) { // 默认初始值是null 所以要返回prop.default
          return type(prop.default)
        }
        switch (type) {
          case String:
            return String(val)
          case Boolean:
            if (has) return this.hasAttribute(name)
            return JSON.parse(val)
          case Number:
            return Number(val)
          case Array:
            return JSON.parse(val)
          case Object:
            return JSON.parse(val)
          default:
            return val
        }
        // if (has) {
        //   const hasAttr = this.hasAttribute(name)
        //   if (!hasAttr) return defaults
        //   if (val === '') return true
        //   if (!val) return false
        // }
        // if (type === Boolean) {
        //   if (val === null) {
        //     return prop.default
        //   }
        //   return JSON.parse(val)
        // }
        // if (type === String) {
        //   const tv = String(val)
        //   return tv === 'null' ? prop.default : tv
        // }
        // if (type === Array) {
        //   if (!val || val === 'undefined') return prop.default
        //   return JSON.parse(val)
        // }
        // if (val === null) {
        //   return defaults
        // }
        // return type(val)
      },
      set(val) {
        if (typeof val === 'string') {
          this.setAttribute(name, val)
          return
        }
        this.setAttribute(name, JSON.stringify(val))
      },
    })
  })
}

// Watch
const Watch = name => (target, methodName, descriptor) => {
  if (!target.attributeWatchMap) target.attributeWatchMap = new Map()
  target.attributeWatchMap.set(name, target[methodName])
}

export { MetaData, Watch }
