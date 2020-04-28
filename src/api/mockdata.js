import mock from 'mockjs';

mock.mock('https://w.cekid.com/kw/search.php',function() {
	let res = [];
		for(let i = 0; i < (Math.floor(Math.random() * 10) + 5); i++) {
			let obj = {
				img : mock.Random.image('250x250'),
				name : mock.Random.ctitle(),
				desc : mock.Random.ctitle(20),
				price : mock.Random.natural()
			}
			res.push(obj);
		}
		return res;
});


//详情页面商品信息 https://w.cekid.com/kw/detail.php
mock.mock('https://w.cekid.com/kw/detail.php',function() {
	let res = [
		{
			linkpath : "123",
			freight: "本店铺满88元包邮，不足则收取10元运费",
			buy_max: 99,
			buy_min: 1,
			
			name: "贝亲 原装玻璃奶瓶",
			good_info : [
				{
					pic_list : [
						{
							url: "http://pmspic-10004025.image.myqcloud.com/97539d3e-6a2f-43ce-b86d-3a83d2c638d6"
						},
						{
							url: "http://pmspic-10004025.image.myqcloud.com/9748a5aa-6e83-46ef-bc96-abcd915f509d"
						},
						{
							url: "http://pmspic-10004025.image.myqcloud.com/1ac3a369-534d-4bd7-9916-131a96cacc86"
						}
					],
					goods_id : 123451,
					price : 150,
					market_price: 110,
					name: "贝亲（Pigeon）宽口径 玻璃奶瓶 配SS号奶嘴 黄色 200ml（新老包装随机发货）",
					prop_list : [
						{
							prop_cfg_id: 394,
							prop_value_id: 1218
						},
						{
							prop_cfg_id: 393,
							prop_value_id: 1211
						}
					],
					product_id : 1452,
				},
				{
					pic_list : [
						{
							url: "http://pmspic-10004025.image.myqcloud.com/97539d3e-6a2f-43ce-b86d-3a83d2c638d6"
						},
						{
							url: "http://pmspic-10004025.image.myqcloud.com/9748a5aa-6e83-46ef-bc96-abcd915f509d"
						},
						{
							url: "http://pmspic-10004025.image.myqcloud.com/1ac3a369-534d-4bd7-9916-131a96cacc86"
						}
					],
					goods_id : 123452,
					price : 119,
					name: "贝亲（Pigeon）宽口径 玻璃奶瓶 配SS号奶嘴 黄色 160ml（新老包装随机发货）",
					prop_list : [
						{
							prop_cfg_id: 394,
							prop_value_id: 1218,
						},
						{
							prop_cfg_id: 393,
							prop_value_id: 1212
						}
					],
					product_id : 1453
				},
				{
					pic_list : [
						{
							url: "http://pmspic-10004025.image.myqcloud.com/8f86448b-8678-41c1-87d9-f89a26d008f3"
						},
						{
							url: "http://pmspic-10004025.image.myqcloud.com/bb3d2109-352c-40b6-8b1d-10163b340d41"
						},
						{
							url: "http://pmspic-10004025.image.myqcloud.com/5986868b-d5d1-458b-bdbb-40cc3752f46f"
						}
					],
					goods_id : 123453,
					price : 150,
					name: "贝亲（Pigeon）宽口径 玻璃奶瓶 配SS号奶嘴 绿色 200ml（新老包装随机发货）",
					prop_list : [
						{
							prop_cfg_id: 394,
							prop_value_id: 1216
						},
						{
							prop_cfg_id: 393,
							prop_value_id: 1211
						}
					],
					product_id : 1455
				},
				{
					pic_list : [
						{
							url: "http://pmspic-10004025.image.myqcloud.com/8f86448b-8678-41c1-87d9-f89a26d008f3"
						},
						{
							url: "http://pmspic-10004025.image.myqcloud.com/bb3d2109-352c-40b6-8b1d-10163b340d41"
						},
						{
							url: "http://pmspic-10004025.image.myqcloud.com/5986868b-d5d1-458b-bdbb-40cc3752f46f"
						}
					],
					goods_id : 123454,
					price : 150,
					name: "贝亲（Pigeon）宽口径 玻璃奶瓶 配SS号奶嘴 绿色 160ml（新老包装随机发货）",
					prop_list : [
						{
							prop_cfg_id: 394,
							prop_value_id: 1216
						},
						{
							prop_cfg_id: 393,
							prop_value_id: 1212
						}
					],
					product_id : 1456
				},
			],
			
			
			buy_opation : [
				{
					list : [
						{
							name: "黄色",
							prop_value_id: 1218,
						},
						{
							name: "绿色",
							
							prop_value_id: 1216,
						}
					],
					name : "颜色",
					prop_cfg_id: 394
				},
				{
					list : [
						{
							name: "200ml",
							price: 150,
							
							prop_value_id: 1211,
						},
						{
							name: "160ml",
							price: 119,
							prop_value_id:  1212,
						}
					],
					name : "大小",
					prop_cfg_id: 393
				},
			],
			
			
		}
	];
		// for(let i = 0; i < (Math.floor(Math.random() * 10) + 5); i++) {
		// 	let obj = {
		// 		img : mock.Random.image('250x250'),
		// 		name : mock.Random.ctitle(),
		// 		desc : mock.Random.ctitle(20),
		// 		price : mock.Random.natural()
		// 	}
		// 	res.push(obj);
		// }
		return res;
});


//mock 发送验证短信页面
mock.mock("https://w.cekid.com/kw/sms.php",function() {
	let res = {
		code : 0,
		result : "ok"
	}
	return res;
})

//mock 登录
mock.mock("https://w.cekid.com/kw/login.php",function() {
	let res = {
		code : 0,
		result : "ok",
		token : "jldfajsdlfjadls,asdfkjasdkfa;asdkfjals"
	}
	return res;
})


//mock 注册
mock.mock("https://w.cekid.com/kw/regist.php",function() {
	let res = {
		code : 0,
		result : "ok",
	}
	return res;
})



//mock 用户信息
mock.mock("https://w.cekid.com/kw/userinfo.php",function(req) {
	console.log(req)
	let res = {
		code : 0,
		data : {
			tel : "1345678944"
		},
		result : "ok",
	}
	return res;
})
