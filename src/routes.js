import Header from './components/Header/index.js';
import Main from './components/Main/index.js';
import Footer from './components/Footer/index.js';
import Shopdetails from './components/Shopdetails/index.js';
import Consultingprogram from './components/Consultingprogram/index.js';
import Consultingdetail from './components/Consultingdetail/index.js';
import storehome2 from './components/storehome2/index.js';
import allproduct from './components/allproduct/index.js';
import childrenWear1 from './components/childrenWear1/index.js';
import Login from './components/Login/index.js';

// 匹配路由时一定要注意先后顺序，他们会是同辈元素
export default [{
  'path': '/',
  'components': Login
      // Header + Main + Footer
},{
  'path': '/childrenWear1',
  'components': childrenWear1
},{
  'path': '/Login',
  'components': Login
},{
  'path': '/Shopdetails',
  'components': Shopdetails
},{
  'path': '/allproduct',
  'components': allproduct
},{
  'path': '/Consultingprogram',
  'components': Consultingprogram
},{
  'path': '/Consultingdetail',
  'components': Consultingdetail
},{
  'path': '/storehome2',
  'components': storehome2
},{
  'path': '/Main',
  'components': Main
}, {
  'path': '/Footer',
  'components': Footer
},  {
  'path': '/childrenWear1',
  'components': childrenWear1  //童装服务模块首页，未完
},{
  'path': '/Header',
  'components': Header
}];