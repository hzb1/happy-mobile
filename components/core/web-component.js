import { propToObj } from './util/util'
import BaseComponent from './base-component'

const Component = ({
  tag,
  prop = [],
  template = () => '',
  styleUrl = () => '',
}) => (Target) => {
  Target.prototype.$tag = tag
  Target.prototype.$prop = propToObj(prop)
  Target.prototype.$template = template
  Target.prototype.$style = styleUrl

  // 把props绑定到属性上 单向绑定
  prop.forEach(({ name, type = String, has = false }) => {
    Object.defineProperty(Target.prototype, name, {
      get() {
        const val = this.getAttribute(name)
        // console.log(val, ':val', name, ':name')
        if (has) {
          const hasAttr = this.hasAttribute(name)
          if (!hasAttr) return false
          if (val === '') return true
          if (!val) return false
        }
        if (type === Boolean) {
          if (val === null) {
            return this.$prop[name].default
          }
          return JSON.parse(val)
        }
        if (type === String) {
          const tv = String(val)
          return tv === 'null' ? this.$prop[name].default : tv
        }
        if (type === Array) {
          if (!val || val === 'undefined') return this.$prop[name].default

          // console.warn(val, 'Array get val')
          return JSON.parse(val)
        }
        return type(val)
      },
      set(val) {
        // console.warn(JSON.stringify(val), 'Array set')
        this.setAttribute(name, JSON.stringify(val))
      },
    })
  })
}

export default Component
