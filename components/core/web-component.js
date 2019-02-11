import { toHump } from './util'

const Component = ({
  tag,
  prop = [],
  template = () => '',
  styleUrl = () => '',
}) => (Target) => {
  Target.prototype.$tag = tag
  Target.prototype.$prop = prop
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
          if (!hasAttr || !val) return false
        }
        if (type === Boolean) {
          return JSON.parse(val)
        }
        return type(val)
      },
      set(val) {
        this.setAttribute(name, val)
      },
    })
  })
}

export default Component
