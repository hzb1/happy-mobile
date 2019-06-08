
import './assets/css/index.css'
import { navConfig, iframeBaseUrl } from '../config'

import './components/index'
import './router/router'

console.log(iframeBaseUrl)

const requestAnimFrame = (() => window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || function (callback) {
    window.setTimeout(callback, 1000 / 60)
  })()

const init = () => {
  const appNav = document.querySelector('.app-nav')
  const appIframe = document.querySelector('.app-iframe')
  const iframe = appIframe.querySelector('iframe')

  // 生成nav组件列表
  let cHtml = ''
  const forFun = (item) => {
    if (!item || !item.length) return ''
    let t = '<ul>'
    item.forEach((i) => {
      t += `
          <li>
            <a class="list" href="${i.link}">
              <p>${i.name}</p>
              <h-icon type="right"></h-icon>
            </a>
          </li>
        `
    })
    t += '</ul>'
    return t
  }
  navConfig.forEach((item) => {
    cHtml += `
        <h6>${item.name}</h6>
        ${forFun(item.children)}
      `
  })
  const component = document.querySelector('#component-container')
  component.innerHTML = cHtml

  // 主题切换
  const themeInput = document.querySelector('#theme-input')
  themeInput.value = '#1f78ff'
  if (themeInput) {
    themeInput.addEventListener('input', (ev) => {
      const html = document.querySelector('html')
      html.style.setProperty('--h-theme-primary', ev.target.value)
    })
  }

  // 监听滚动事件
  window.addEventListener('scroll', () => {
    requestAnimFrame(() => {
      const s = document.documentElement.scrollTop || document.body.scrollTop // 滚动条y轴上的距离
      const baseTop = 50
      let top
      if ((baseTop - s) > 50) {
        top = baseTop
      } if ((baseTop - s) < 0) {
        top = 0
      } else {
        top = baseTop - s
      }
      appNav.style.top = `${top}px`
      appIframe.style.top = `${top}px`
    })
  }, false)


  // 初始化nav.active
  const { hash } = window.location
  const curList = component.querySelector(`a[href="${hash}"]`)
  if (curList) curList.classList.add('active')

  iframe.src = `${iframeBaseUrl}/${hash}`
  console.log(`${iframeBaseUrl}/${hash}`)
}

init()
