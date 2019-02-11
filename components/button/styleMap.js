
const styleColor = new Map([
  ['null', ['h-button--default']],
  ['default', ['h-button--default']],
  ['primary', ['h-button--primary']],
  ['warn', ['h-button--warn']],
  ['error', ['h-button--error']],
])

const styleSize = new Map([
  ['null', ['h-button--medium']],
  ['small', ['h-button--small']],
  ['medium', ['h-button--medium']],
  ['large', ['h-button--large']],
])

const styleShadow = new Map([
  [true, ['h-button--shadow']],
  [false, []],
])

const styleDisabled = new Map([
  [true, ['h-button--disabled']],
  [false, []],
])

const styleInline = new Map([
  [true, ['h-button--inline']],
  [false, []],
])

export default {
  styleColor,
  styleSize,
  styleShadow,
  styleDisabled,
  styleInline,
}
