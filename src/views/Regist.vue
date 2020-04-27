<template>
  <div class="regist">
	  <div class="login_text">
	  	注册
	  </div>
	  <!-- 密码注册 开始 -->
	  
		<div class="pwd" v-if="typeregist == 1">
			<van-field class="tel" v-model="username" type="text"  placeholder="请输入用户名" />
			
			<van-field class="tel" v-model="pwd" type="text"  placeholder="请输入密码" />
				
			<van-button @click="onchangeregist(2)" class="btn_mini" type="info"  size="mini">手机注册</van-button>
			<van-button class="msg_btn" @click="pwd_regist" color="blue" size="large" >立即注册</van-button>
		</div>
		
		
		<!-- 手机注册 -->
		<div class="tel_box" v-if="typeregist == 2">
			<div class="message" v-if="!hassend">
				<van-cell class="msg_chain" title="中国" is-link />
				<div class="toast">成功注册帐号后，国家/地区将不能被修改</div>
				<van-field class="msg_chain msg_2" v-model="tel" type="tel" label="+86" placeholder="请输入手机号码" />
				<van-button class="msg_btn" color="blue" size="large" @click="onSms()">立即登录/注册</van-button>
			</div>
				
			
			<!-- 等待验证开始 -->
				<div class="message" v-if="hassend">
					<div >我们已经发送一条验证短信至: {{tel}}</div>
					<div >请输入短信中的验证码</div> 
					
					<van-field
					  v-model="sms"
					  center
					  clearable
					  placeholder="请输入短信验证码"
					>
					  <template #button>
					    <van-button size="small" @click="onSms()"  type="primary">重新发送验证码</van-button>
					  </template>
					</van-field>
					
					<van-button class="btn_next"  type="info" size="large" @click="regist">完成注册</van-button>
					<van-button class="btn_return" type="info" size="large" @click="ruturnTo">上一步</van-button>
					
				</div>
			<!-- 等待验证结束 -->
			
			
			<van-button @click="onchangeregist(1)" class="btn_mini" type="info"  size="mini">密码注册</van-button>
		</div>
	  
	  <!-- 密码注册 结束 -->
	
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
	
  },
  data() {
	  return {
		  typeregist : 1,
		  sms : "",
		  tel : "",
		  hassend : false,
		  username : "",
		  pwd : "",
	  }
  },
  methods: {
	  pwd_regist() {
		  if(this.username.length <= 0 && this.pwd.length <= 0) {
			  this.$toast("用户名密码不能为空")
		  }else {
			  this.$api.getRegistAPI({
			  	username : this.username,
			  	pwd : this.pwd
			  }).then( res => {
			  	if(res.data.code == 0) {
					this.$toast("注册成功")
			  		this.$router.push("/login");
			  	}
			  }).catch( err => {
			  	console.log("注册失败",err)
			  })
		  }
		  
	  },
	  regist() {
		  this.$api.getRegistAPI({
		  	tel : this.tel,
		  	sms : this.sms
		  }).then( res => {
		  	if(res.data.code == 0) {
		  		this.$router.push("/login");
		  	}
		  }).catch( err => {
		  	console.log("注册失败",err)
		  })
	  },
	  ruturnTo() {
		  this.hassend = false;
	  },
	  onSms() {
	  	if(this.tel.length <= 0) {
	  		this.$toast('请输入手机号');
	  	}else {
	  		this.$api.getSmsAPI({
	  			tel : this.tel,
	  			type : 'regist'
	  		}).then( res => {
	  			console.log(res.data.code);
	  			if(res.data.code == 0) {
	  				this.$toast('验证码已发送');
	  				this.hassend = true;
	  			}
	  		}).catch( err => {
	  			console.log('发送失败',err);
	  		})
	  	}
	  },
	  onchangeregist(typeNum) {
		  this.typeregist = typeNum;
		  this.$toast("改变成功");
	  }
  }
}
</script>
<style scoped="scoped" lang="less">
	.regist {
		.login_text {
			text-align: left;
			font-size: 0.6rem;
			color: #000;
			margin-top: 0.5rem;
			margin-left: 0.3rem;
		}
		.pwd {
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
		.tel_box {
			.btn_mini {
				margin-top: 0.3rem;
				margin-left: 80%;
			}
		}
		.msg_btn {
			width: 90%;
			margin-left: 0.2rem;
			margin-top: 0.5rem;
		}
		.message {
			margin-top: 0.3rem;
			.btn_next,.btn_return {
				width: 90%;
				margin-left: 0.2rem;
				margin-top: 0.3rem;
			}
		}
	}
</style>
