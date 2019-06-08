

const html = require('./index.html')


class HappyForm {
  constructor(form, validators) {
    this.state = {
      valid: 'h-valid',
      invalid: 'h-invalid',
    }

    this.defaultValidator = {
      type: 'input', // 校验方式 blur、input 默认是blur事件
      required: false, // 是否是必填项
      min: null, // 最小值
      max: null, // 最大值
      minlength: null, // 最小长度
      maxlength: null, // 最大长度
    }

    this.elements = [...form.elements]
    console.log(this.elements, 'elements')
    this.elements.forEach((item) => {
      console.log(item.value)
    })

    Object.keys(validators).forEach((item) => {
      if (validators[item]) this.verification(form[item], validators[item])
    })
  }

  verification(input, validator) {
    validator = Object.assign({}, this.defaultValidator, validator)
    input.addEventListener(validator.type, (ev) => {
      const el = ev.target
      const { value } = el
      Object.keys(validator).forEach((item) => {
        switch (item) {
          case 'required':
            if (validator[item]) {
              el.classList.toggle(this.state.invalid, value === null || value === '')
              el.setCustomValidity('必填项')
            }
            break
          case 'minlength':
            if (validator[item] !== null && value.length < validator[item]) {
              el.classList.add(this.state.invalid)
            }
            break
          case 'maxlength':
            if (validator[item] !== null && value.length > validator[item]) {
              el.classList.add(this.state.invalid)
            }
            break
          default:
        }
      })
      console.log(validator)
      if (!el.classList.contains(this.state.invalid)) {
        el.classList.add(this.state.valid)
      }
    })
    // if (validator.required) {
    //   if (el.value) {
    //     el.classList.remove(this.state.invalid)
    //   } else {
    //     el.classList.add(this.state.invalid)
    //     return
    //   }
    // }
    // el.classList.add(this.state.valid)
  }
}


export default class Form extends HTMLElement {
  static get tagName() {
    return 'app-form'
  }

  connectedCallback() {
    this.innerHTML = html

    const myFrom = this.querySelector('#myForm')
    myFrom.addEventListener('submit', this.login.bind(this), false)

    this.validators = {
      name: {
        required: true,
        minlength: 3,
        maxlength: 6,
      },
    }

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
