
const styleColor = new Map([
  [null, ['h-button--primary']],
  ['primary', ['h-button--primary']],
  ['white', ['h-button--white']],
  ['green', ['h-button--green']],
  ['yellow', ['h-button--yellow']],
  ['red', ['h-button--red']],
])

const styleSize = new Map([
  // ['null', ['h-button--medium']],
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

const styleOutline = new Map([
  [true, ['h-button--outline']],
  [false, []],
])

export {
  styleColor,
  styleSize,
  styleShadow,
  styleDisabled,
  styleInline,
  styleOutline,
}
