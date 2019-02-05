import { toHump } from './util'

const Component = ({
  tag,
  prop = [],
  template = () => '',
  style = '',
  styleUrl = () => '',
}) => (Target) => {
  Target.prototype.$tag = tag
  Target.prototype.$prop = prop
  Target.prototype.$template = template
  Target.prototype.$style = style || styleUrl()
  // Target.prototype.click = HTMLButtonElement.prototype.click

  // 把props绑定到属性上 单向绑定
  prop.forEach(({ name, type = String, defaults }) => {
    const hName = toHump(name)
    Object.defineProperty(Target.prototype, hName, {
      // value: defaults,
      get() {
        const val = this.getAttribute(name)
        if (type !== String) {
          return JSON.parse(val)
        }
        return val
      },
      set(val) {
        this.setAttribute(name, val)
      },
    })
    // Target.prototype.setAttribute(name, defaults)
    // console.log(Target[name])
    // Target[name] = defaults
  })
}

export default Component
