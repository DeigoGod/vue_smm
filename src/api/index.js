import {mock} from './mockdata.js';
//设置首页数据API
import axios from 'axios';
// 配置默认域名
axios.defaults.baseURL = 'https://w.cekid.com/';

//搜索API
let getSearchAPI = (data) => {
	return axios.post("/kw/search.php",data);
}









//导出api
export {
	getSearchAPI,
}