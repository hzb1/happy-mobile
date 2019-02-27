

const html = require('./index.html')

export default class Form extends HTMLElement {
  static get tagName() {
    return 'app-form'
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = html
  }

  login(ev) {
    try {
      const { toast } = window.happy
      const submit = this.querySelector('#submit')
      // submit.showLoading()
      // submit.loading = true;
      const form = this.querySelector('#myForm')
      submit.loading = true
      const body = new FormData()
      body.append('name', testform.name.value)
      body.append('password', testform.password.value)
      const option = {
        method: 'post',
        body,
      }
      fetch('https://easy-mock.com/mock/5c6cf7008d04876a33c074fb/api/login', option).then(response => response.json()).then((res) => {
        if (res.code === 0) {
          toast.show(res.msg) // 登录成功
        }
      }).finally(() => {
        submit.loading = false
      })
    } catch (e) {
      // submit.loading = false;
      // submit.disabled = false;
    }

    return false
  }
}
