import { createStore } from 'redux'

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// 创建一个保存应用程序状态的Redux商店。
// 其 API 为 { subscribe, dispatch, getState }.
const store = createStore(counter)

// 可以使用subscribe（）更新UI以响应状态更改。
// 通常使用视图绑定库（例如react redux），而不是直接使用subscribe（）。
// 但是，在本地存储中保持当前状态也很方便。

// store.subscribe(() => console.log(store.getState()))

// 唯一改变内部状态的方法是调度一个操作。
// 这些操作可以序列化、记录或存储，稍后再重放。
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1

export default store
