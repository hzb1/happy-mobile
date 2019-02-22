

export default class HError extends Error {
  constructor(message) {
    super(message)
    this.message = message
    this.name = 'Error' // （不同内置错误类别的名称）
  }
}
