<template>
  <div class="login">
		<div class="login_text">
			快捷登录
		</div>
		<div v-if="logintype == 2" class="login_box">
			
			<van-field class="tel" v-model="tel" type="tel"  placeholder="请输入手机号" />
			
			<!-- 手机验证码 -->
			<van-field
			class="sms"
			  v-model="sms"
			  center
			  clearable
			  placeholder="请输入短信验证码"
			>
			  <template #button>
			    <van-button @click="onSms" size="small" type="primary">发送验证码</van-button>
			  </template>
			</van-field>
				<van-button @click="onchangelogin(1)" class="btn_mini" type="info"  size="mini">密码登录</van-button>
		</div>
		
		<!-- 账号密码登录 开始 -->
			<div v-if="logintype == 1" class="login_box">
				
				<van-field class="tel" v-model="username" type="text"  placeholder="请输入用户名" />
				
				<van-field class="tel" v-model="pwd" type="text"  placeholder="请输入密码" />
					
				<van-button @click="onchangelogin(2)" class="btn_mini" type="info"  size="mini">手机登录</van-button>
				<!-- 注册 开始 -->
					<div class="regist">
						<router-link to="/regist">
							注册
						</router-link>
					</div>
			</div>
		<!-- 账号密码登录 结束 -->
		
		<!-- 注册 结束 -->
		<!-- 霸王条款 开始 -->
		
			<div class="clause">
				已阅读并同意<span>《霸王条款》</span>及<span>《隐私政策》</span>
			</div>
		
		<!-- 霸王条款 结束 -->
		
		<!-- 按钮 开始 -->
			<div class="btn">
				<van-button @click="onlogins" type="primary" size="large">登录</van-button>
			</div>
			
		<!-- 按钮 结束 -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
	
  },
  data() {
	  return {
		  logintype : 1,
		  sms : "",
		  tel : "",
		  username : "smm",
		  pwd : "123456",
	  }
  },
  methods: {
	  onSms() {
		  if(this.tel.length <= 0) {
			  this.$toast("不能为空");
		  }else {
			  this.$api.getSmsAPI({
				  tel : this.tel,
				  //上传服务器的类型
				  type : "regist"
			  }).then( res => {
				  if(res.data.code == 0) {
					  this.$toast("验证码已经发送,注意接收");
				  }
			  }).catch( err => {
				  this.$toast("发送失败",err);
			  })
		  }
	  },
	  onlogins() {
		  if(this.logintype == 1) {
			  this.$api.getLoginAPI({
				  fmdo : "username",
				  dopost : "login",
				  username : this.username ,
				  pwd : this.pwd
			  }).then( res => {
				  console.log(res);
				  this.$cookie.set("username",this.username,{expires : 7});
				  this.$cookie.set("token",res.data.token,{expires : 7});
				  let next = this.$route.query.next;
					if(next) {
						this.$router.push(next);
					}else {
						this.$router.push("/");
					}
			  }).catch( err => {
				  this.$toast("登录失败",err)
			  })
		  }else if(this.logintype == 2) {
			  this.$api.getLoginAPI({
				  fmdo : "tel",
				  dopost : "login",
				  username : this.tel ,
				  pwd : this.pwd
			  }).then( res => {
				  console.log(res);
				  this.$cookie.set("tel",this.tel,{expires : 7});
				  this.$cookie.set("token",res.data.token,{expires : 7});
				  let next = this.$route.query.next;
					if(next) {
						this.$router.push(next);
					}else {
						this.$router.push("/");
					}
			  }).catch( err => {
					this.$toast("登录失败",err)
			  })
		  }
		  
	  },
	  onchangelogin(typeNum) {
		  this.logintype = typeNum;
		  this.$toast("改变成功");
	  }
  }
}
</script>
<style scoped="scoped" lang="less">
	.login {
		.login_text {
			text-align: left;
			font-size: 0.6rem;
			color: #000;
			margin-top: 0.5rem;
			margin-left: 0.3rem;
		}
		.login_box {
			margin-top: 0.5rem;
			.tel,.sms {
				margin-left: 0.3rem;
				width: 90%;
				height: 1rem;
				border-bottom: 1px solid #ccc;
			}
			.btn_mini {
				font-size: 0.1rem;
				margin-left: 80%;
				margin-top: 0.3rem;
			}
			.regist {
				font-size: 0.3rem;
				text-align: right;
				margin-top: 0.2rem;
				margin-right: 0.3rem;
			}
		}
		.clause {
			text-align: left;
			margin-left: 0.3rem;
			margin-top: 0.2rem;
			font-size: 0.12rem;
			color: #000;
			span {
				color: #ffb637;
			}
		}
		.btn {
			width: 90%;
			margin-top: 0.5rem;
			margin-left: 0.3rem;
		}
	}
</style>
