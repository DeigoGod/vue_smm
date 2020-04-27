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
					<router-link to="">
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
					{{username}}
				</div>
			</div>
	  <!-- 信息展示结束 -->
   我的

  </div>
</template>

<style scoped="scoped" lang="less">
	.me {
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
	}
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
   
  },
  data() {
	  return {
		  
	  }
  }
  methods: {
	  onReturn() {
		  this.$router.go(-1);
	  }
  }
}
</script>
