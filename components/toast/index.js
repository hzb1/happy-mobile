import Toast from './toast'

Toast.register()

if (!window.happy) window.happy = {}
if (!window.happy.toast) window.happy.toast = Toast

export default Toast
