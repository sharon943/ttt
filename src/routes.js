import Header from './components/Header/index.js';
import Main from './components/Main/index.js';
import Footer from './components/Footer/index.js';
import Shopdetails from './components/Shopdetails/index.js';
import Consultingprogram from './components/Consultingprogram/index.js';
import Consultingdetail from './components/Consultingdetail/index.js';

// 匹配路由时一定要注意先后顺序，他们会是同辈元素
export default [{
  'path': '/',
  'components': Header + Main + Footer
}, 
{
  'path': '/Shopdetails',
  'components': Shopdetails
},{
  'path': '/Consultingprogram',
  'components': Consultingprogram
},{
  'path': '/Consultingdetail',
  'components': Consultingdetail
},{
  'path': '/Main',
  'components': Main
}, {
  'path': '/Footer',
  'components': Footer
}, {
  'path': '/Header',
  'components': Header	
}];