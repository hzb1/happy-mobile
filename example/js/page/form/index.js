

const html = require('./index.html')

export default class Form extends HTMLElement {
  static get tagName() {
    return 'app-form'
  }

  connectedCallback() {
    this.innerHTML = html

    const myFrom = this.querySelector('h-form')
    myFrom.data = [
      {
        name: 'name',
        label: '账号',
        labelWidth: '3.5em',
        input: {
          defaultValue: '',
          placeholder: '请输入账号',
          type: 'text',
          valueType: 'string',
        },
        novalidate: false, // 即使表单包含无效的输入，也允许用户提交表单
        validation: { // 校验规则
          required: {
            value: true,
            errorInfo: '账号不能为空',
          },
          pattern: {
            value: '',
            errorInfo: '验证码不合法',
          },
        },
      },
      {
        name: 'password',
        label: '密码',
        labelWidth: '3.5em',
        input: {
          defaultValue: '',
          placeholder: '密码',
          type: 'password',
          valueType: 'string',
        },
        novalidate: false, // 即使表单包含无效的输入，也允许用户提交表单
        validation: {
          required: {
            value: true,
            errorInfo: '密码不能为空',
          },
          pattern: {
            value: '',
            errorInfo: '验证码不合法',
          },
        },
      },
      {
        name: 'code',
        label: '验证码',
        labelWidth: '4em',
        input: {
          defaultValue: '1234',
          placeholder: '获取手机验证码',
          type: 'number',
          valueType: 'number',
        },
        novalidate: false, // 即使表单包含无效的输入，也允许用户提交表单
        validation: {
          required: {
            value: false,
            errorInfo: '验证码不能为空',
          },
          pattern: {
            value: '',
            errorInfo: '验证码不合法',
          },
        },
      },
    ]


    myFrom.addEventListener('submit', (e) => {
      console.log('myFrom submit', e.detail)
    })
    // console.log(submit)
    // myFrom.addEventListener('submit', this.login.bind(this), false)

    // this.validators = {
    //   name: {
    //     required: true,
    //     minlength: 3,
    //     maxlength: 6,
    //   },
    // }

    // this.f = new HappyForm(myFrom, this.validators)
  }

  login(ev) {
    const form = this.querySelector('#myForm')
    // console.log('1', form.checkValidity())
    if (form.checkValidity() === false) {
      window.alert('Form is invalid - submission prevented!')
      return false
    }
    ev.preventDefault()
    // To prevent data from being sent, we've prevented submission
    // here, but normally this code block would not exist.
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
      fetch('https://easy-mock.com/mock/5c6cf7008d04876a33c074fb/api/api/user/login', option).then(response => response.json()).then((res) => {
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
