<template>
	<div class="set">
		<!-- 头部开始 -->
			<div class="header">
				<div class="left">
					
						<van-icon @click="onReturn" name="arrow-left" />
					<router-link to="/">
						<van-icon class="f" name="wap-home-o" />
					</router-link>
					
				</div>
				<div class="text" style="font-size: 0.4rem; margin-left: -0.2rem;">
					设置
				</div>
				<div class="right">
					<!-- <router-link to="/set">
						<van-icon name="setting-o" />
					</router-link> -->
					
				</div>
			</div>
		<!-- 头部结束 -->
		
		<!-- 退出登录 开始 -->
				<div class="unlogin">
					<van-cell is-link @click="showPopup">退出登录</van-cell>
					<van-popup style="width: 3rem; padding: 0.2rem;" class="ps" v-model="show">
							<p>确定要退出吗？</p>
						<div class="btn">
							<van-button type="primary" @click="onqx" size="small">取消</van-button>
							<van-button @click="onDetermine" style="margin-left: 0.2rem;" class="right" type="primary" size="small">确定</van-button>
						</div>
					</van-popup>
				</div>
		<!-- 退出登录 结束 -->
		
		<!-- 修改用户名 开始 -->
				<div class="modify">
					<van-field class="tel" v-if="$cookie.get('username')" v-model="username" type="text"  placeholder="请输入修改的用户名" />
					
					<van-field class="tel" v-else-if="$cookie.get('tel')" v-model="tel" type="text"  placeholder="请输入修改的电话" />
				</div>
			
			<div class="unlogin">
				<van-cell is-link @click="showPopup">修改</van-cell>
				<van-popup style="width: 3rem; padding: 0.2rem;" class="ps" v-model="show">
						<p>确定要退出吗？</p>
					<div class="btn">
						<van-button type="primary" @click="onqx" size="small">取消</van-button>
						<van-button @click="onModify" style="margin-left: 0.2rem;" class="right" type="primary" size="small">确定</van-button>
					</div>
				</van-popup>
			</div>
		<!-- 修改用户名 结束 -->
		
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Overlay } from 'vant';
	
	Vue.use(Overlay);
	export default {
	  name: 'Home',
	  components: {
	   
	  },
	  data() {
		  return {
			show: false,
			userinfo : "",
			tel : "",
			username : "",
		  }
	  },
	  methods: {
		  onModify() {
			  this.$cookie.remove("username");
			  this.$cookie.set("username",this.username,{expires : 7});
			  
			  this.$cookie.remove("tel");
			  
			  this.$router.push("/mine");
		  },
		  onqx() {
			  this.show = false;
		  },
		  onDetermine() {
			  this.$cookie.remove("username");
			  this.$router.push("/")
		  },
		  onReturn() {
			  this.$router.go(-1);
		  },
		  showPopup() {
			this.show = true;
		  },
	  }
	}
</script>

<style scoped="scoped" lang="less">
	.set {
		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 1rem;
			font-size: 0.56rem;
			line-height: 1rem;
			.left {
				margin-left: 0.2rem;
				.f {
					margin-left: 0.2rem;
				}
			}
			.right {
				margin-right: 0.2rem;
			}
		}
		 .wrapper {
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    height: 100%;
		  }
		
		  .block {
		    width: 120px;
		    height: 120px;
		    background-color: #fff;
		  }
		  .unlogin {
			  // background-color: orangered;
		  }
		  .modify {
			  margin-top: 0.3rem;
		  }
	}
	
</style>
