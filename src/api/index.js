import {mock} from './mockdata.js';
//设置首页数据API
import axios from 'axios';
// 配置默认域名
axios.defaults.baseURL = 'https://w.cekid.com';

//搜索API
let getSearchAPI = (data) => {
	return axios.post("/kw/search.php",data);
}

//详情页数据API
let getDetailDataAPI = (data) => {
	return axios.get("/kw/detail.php", {
		params : {
			id : data.id
		}
	})
}

//验证码API
let getSmsAPI = (data) => {
	return axios.post("/kw/sms.php",data)
}

//登录API
let getLoginAPI = (data) => {
	return axios.post("/kw/login.php",data)
}

//注册API
let getRegistAPI = (data) => {
	return axios.post("/kw/regist.php",data)
}


//用户信息API
let getUserInfoAPI = () => {
	return axios.get("/kw/userinfo.php",{})
}






//导出api
export {
	getSearchAPI,
	getDetailDataAPI,
	getSmsAPI,
	getLoginAPI,
	getRegistAPI,
	getUserInfoAPI,
}