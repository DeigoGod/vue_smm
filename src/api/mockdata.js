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


