/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
// let baseUrl = 'https://adminnew.v-ka.com'; //打包生产环境地址
let baseUrl = 'https://vk2.vi-ni.com'; //打包测试地址
// let baseUrl = 'http://192.168.267.36:8084'; //打包测试地址
let accessToken='';
let routerMode = 'history';
let baseImgPath='';
let warm='您长时间未操作，需要重新登录'
// if (process.env.NODE_ENV == 'development') {
// 	   baseUrl = 'http://localhost:8002';
//     baseImgPath = 'http://localhost:8002/img/';
// }else{
// 	   baseUrl = 'http://cangdu.org:8001';
//     baseImgPath = 'http://cangdu.org:8001/img/';
// }
export default {
  baseUrl,
  routerMode,
  baseImgPath,
  accessToken,
  warm
}
