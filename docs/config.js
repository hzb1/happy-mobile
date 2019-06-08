import cList from '../example/js/config'


export const navConfig = cList

console.log('process.env.NODE_ENV', process.env.NODE_ENV)
console.log('navConfig', navConfig)
export const iframeBaseUrl = process.env.NODE_ENV === 'development' ? 'http://0.0.0.0:7777' : 'https://hzb1.github.io/happy-mobile/example/js/dist' // production development

// export default {
//   navConfig,
//   iframeBaseUrl,
// }
