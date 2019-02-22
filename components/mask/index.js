import Mask from './mask'

Mask.register()

if (!window.happy) window.happy = {}
if (!window.happy.mask) window.happy.mask = Mask

export default Mask
