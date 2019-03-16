/* eslint-disable no-console, class-methods-use-this */

class BaseComponent extends HTMLElement {
  // 注册
  static register(name = this.prototype.$tag) {
    try {
      if (window.customElements.get(name)) {
        console.warn(`happy-mobile: ${name}标签不能重复注册`)
        return
      }
      window.customElements.define(name, this)
    } catch (e) {
      throw e
    }
  }

  /**
   * 发送自定义事件 组件通讯
   * @param evNmae 事件名
   * @param evData 携带的数据 给父组件传的参数
   * @param shouldBubble 事件冒跑 bool
   */
  emit(evNmae, evData, shouldBubble = false) {
    let evt
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evNmae, {
        detail: evData,
        bubbles: shouldBubble,
      })
    } else {
      evt = document.createEvent('CustomEvent')
      evt.initCustomEvent(evNmae, shouldBubble, false, evtData)
    }

    this.dispatchEvent(evt)
  }

  /**
   * 订阅事件 addEventListener
   * @param evtType 事件类型 srt
   * @param handler 函数 fun
   */
  listen(evtType, handler) {
    this.addEventListener(evtType, handler)
  }

  /**
   * 删除事件订阅
   *   主要用于删除组件的时候 清空它的事件订阅
   * @param evNmae 事件类型 srt
   * @param handler 函数 fun
   */
  unlisten(evNmae, handler) {
    this.removeEventListener(evNmae, handler)
  }

  wran(message = '') {
    console.warn(`[happy-mobile]: ${message}`)
  }

  error(message = '') {
    console.error(`[happy-mobile]: ${message}`)
  }
}

export default BaseComponent
