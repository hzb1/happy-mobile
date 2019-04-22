

const html = require('./index.html')

export default class Form extends HTMLElement {
  static get tagName() {
    return 'app-form'
  }

  connectedCallback() {
    this.innerHTML = html

    const myFrom = this.querySelector('#myForm')
    myFrom.addEventListener('submit', this.login, false)
  }

  login(ev) {
    ev.preventDefault()
    ev.stopPropagation()
    // console.log('name', ev.target.name.name, ev.target.name.value)
    // console.log('password', ev.target.password.name, ev.target.password.value)
    // console.log('checkbox1', ev.target.checkbox1.name, ev.target.checkbox1.value)
    const submit = this.querySelector('#submit')
    try {
      const formData = {}
      Array.from(ev.target.elements).forEach((item) => {
        if (item.name) formData[item.name] = item.value
      })
      submit.loading = true
      const body = new FormData(formData)
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const o in formData) {
        body.append(o, formData[o])
      }
      const option = {
        method: 'post',
        body,
      }
      fetch('https://easy-mock.com/mock/5c6cf7008d04876a33c074fb/api/login', option).then(response => response.json()).then((res) => {
        if (res.code === 0) {
          const { Toast } = window.happy
          Toast.show(res.msg) // 登录成功
        }
      }).finally(() => {
        submit.loading = false
      })
    } catch (e) {
      submit.loading = false
      submit.disabled = false
    }

    return false
  }
}
