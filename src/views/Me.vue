<template>
  <div class="me">
	  
	  <!-- 头部开始 -->
			<div class="header">
				<div class="left">
					
						<van-icon @click="onReturn" name="arrow-left" />
					<router-link to="/">
						<van-icon class="f" name="wap-home-o" />
					</router-link>
					
				</div>
				<div class="text" style="font-size: 0.4rem; margin-left: -0.2rem;">
					会员中心
				</div>
				<div class="right">
					<router-link to="/set">
						<van-icon name="setting-o" />
					</router-link>
					
				</div>
				
			</div>
	  <!-- 头部结束 -->
	  
	  <!-- 信息展示开始 -->
			<div class="info_show">
				<div class="info_pic">
					<img src="../assets/img/people.jpg" alt="">
				</div>
				<div class="user_text">
					
					<span class="user" v-if="$cookie.get('username')">{{$cookie.get("username")}}</span>
					<span class="user" v-else>{{userinfo.tel}}</span>
					<div class="vip">
						<van-icon name="gem" color="#bbb" />
						<span>银牌会员</span>
					</div>
				</div>
				<i></i>
			</div>
	  <!-- 信息展示结束 -->
	  
	  <!-- 提醒开始 -->
			<van-notice-bar text="为了您的财产安全，不要点击任何陌生链接，不要向任何人透露银行卡或验证码信息，定期更新密码，谨防诈骗！" left-icon="volume-o" />
	  <!-- 提醒结束 -->
	  
	  <!-- 订单 开始 -->
			<router-link to="/cart">
				<van-cell title="全部订单" is-link value="订单 | 查看" />
			</router-link>
			
	  <!-- 订单 结束 -->
	  
	  <!-- 功能 开始 -->
	  
		<div class="link_box">
			<van-grid clickable :column-num="5">
			  <van-grid-item icon="pending-payment" text="待付款" to="" />
			  <van-grid-item icon="logistics" text="待收货" to="" />
			  <van-grid-item icon="manager-o" text="客服" to="" />
			  <van-grid-item icon="chat-o" text="待评论" to="" />
			  <van-grid-item icon="refund-o" text="售后" to="" />
			  
			</van-grid>
		</div>

	  <!-- 功能 结束 -->
	  
	  <!-- 我的钱包 开始 -->
	  
			<div class="wallet">
				<van-cell-group>
				  <van-cell title="我的钱包" value="" />
				</van-cell-group>
				<van-grid class="icon" clickable :column-num="4">
				  <van-grid-item color="#FFCE55" icon="gold-coin" text="余额" to="" />
				  <van-grid-item color="#FFCE55" icon="label" text="优惠券" to="" />
				  <van-grid-item color="#FFCE55" icon="diamond" text="积分" to="" />
				  <van-grid-item color="#FFCE55" icon="map-marked" text="游乐" to="" />				  
				</van-grid>
			</div>
	  
	  <!-- 我的钱包 结束 -->
	  
	  <!-- 我的保险 开始 -->
	  
			<div class="insurance">
				<van-cell-group>
				  <van-cell title="我的保险" value="" />
				</van-cell-group>
				<van-grid class="icon" clickable :column-num="4">
				  <van-grid-item  icon="https://cmspic-10004025.image.myqcloud.com/eaa06744-0c51-44f8-9ab4-92e0326a59e5?imageView2/w/70/h/70/q/80" text="我的保单" to="" />
				  <van-grid-item  icon="https://cmspic-10004025.image.myqcloud.com/d17fc352-44cf-4b81-b3eb-ec696189c85a?imageView2/w/70/h/70/q/80" text="我要理赔" to="" />
				  <van-grid-item  icon="https://cmspic-10004025.image.myqcloud.com/80030ab3-b829-4c1d-9dd2-3d2f73e67b9c?imageView2/w/70/h/70/q/80" text="保险咨询" to="" />		  
				  <van-grid-item  icon="" text="" to="" />		  
				</van-grid>
			</div>
		
	  <!-- 我的保险 结束 -->
	  
	  <!-- 我的常用 开始 -->
	  
			<div class="my_use">
				<van-cell-group>
				  <van-cell title="我的常用" value="" />
				</van-cell-group>
				<van-grid class="icon" clickable :column-num="4">
				  <van-grid-item v-for="(item,index) in me.personal_center[2].category"  :icon="item.image" :text="item.title" :key="index" to="" />		  
					 <van-grid-item icon="" text="" to="" />
					 <van-grid-item icon="" text="" to="" />
					 <van-grid-item icon="" text="" to="" />
				</van-grid>
			</div>
	  
	  <!-- 我的常用 结束 -->
	  
	  <!-- 孩子王平台公式 开始 -->
	  
	  			<div class="my_use">
	  				<van-cell-group>
	  				  <van-cell title="孩子王平台公式" value="" />
	  				</van-cell-group>
	  				<van-grid class="icon" clickable :column-num="4">
	  				  <van-grid-item v-for="(item,index) in me.personal_center[4].category"  :icon="item.image" :text="item.title" :key="index" to="" />		  
						<van-grid-item icon="" text="" to="" />
						<van-grid-item icon="" text="" to="" />
						<van-grid-item icon="" text="" to="" />
					</van-grid>
	  			</div>
	  
	  <!-- 孩子王平台公式 结束 -->

  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import Medata from '../data/me.js'
export default {
  name: 'Home',
  components: {
   
  },
  data() {
	  return {
		  me : Medata,
		  userinfo : "",
		  tel : "",
	  }
  },
  methods: {
	  onReturn() {
		  this.$router.go(-1);
	  },
	  
  },
  created() {
		this.$api.getUserInfoAPI()
		.then( res => {
			this.userinfo = res.data.data;
			this.tel = this.userinfo.tel;
		})
  }
}
</script>

<style scoped="scoped" lang="less">
	.me {
		background-color: #EFF2F7;
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
		.info_show {
			position: relative;
			background: url(../assets/img/me_bg.jpg);
			background-position: 0 0;
			background-repeat: no-repeat;
			background-size: 100%;
			// background-color: #FF397E;
			overflow: hidden;
			text-align: center;
			color: #fff;
			font-size: 0.25rem;
			.info_pic {
				img {
					width: 1rem;
					height: 1rem;
					border: .01rem solid #FFF;
					margin-top: .8rem;
					border-radius: 100%;
				}
			}
			.user_text {
				.user {
					margin-top: 0.23rem;
				}
				.vip {
					display: flex;
					
					justify-content: center;
					align-items: center;
					width: 1.5rem;
					margin: 0.1rem  auto 0.5rem;
					border: 1px solid #fff;
					border-radius: 0.3rem;
					span {
						margin-left: 0.1rem;
					}
				}
			}
			i {
				position: absolute;
				left: 50%;
				bottom: -1.55rem;
				width: 80%;
				height: 1.67rem;
				margin-left: -32%;
				background: url(../assets/img/card.png) no-repeat;
				background-size: 100%;
				transform: rotate(-30deg);
				-webkit-transform: rotate(-30deg);
				transition: all .4s ease-in .3s;
				z-index: 100;
			}
		}
	
		.van-cell__title {
			display: flex;
			justify-content: space-between;
		}
		.van-cell__value {
			font-size: 0.25rem;
		}
		.link_box {
			margin-bottom: 0.3rem;
		}
		.wallet {
			font-size: 0.3rem;
			margin-bottom: 0.3rem;
			.icon {
				color: #FFCE55;
			}
		}
		.insurance {
			margin-bottom: 0.3rem;
		}
		.my_use {
			margin-bottom: 0.3rem;
		}
	}
</style>