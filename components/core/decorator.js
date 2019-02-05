
const Prop = function (target, name, descriptor) {
  console.log(target, name, descriptor.value)
  descriptor.get = function () {
    console.log('get', name)
    return target.hasAttribute('disabled')
  }
  descriptor.set = function (val) {
    console.log('set', name)
    if (val) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }
  return descriptor
}

export { Prop }
