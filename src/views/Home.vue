<template>
  <div class="home">
		<div class="header">
			<div class="left">
				<img src="../assets/img/logo.png" alt=""> |
				<span>南京</span>
			</div>
			<div class="right">
				<van-icon @click="goto" name="search" />
				<van-icon @click="msg" name="chat-o" />
			</div>
			
		</div>
	
	<!-- 标题 开始-->
		<div class="home_title">
			<ul>
				<li><router-link class="ula"  to="/">首页</router-link></li>
				<li><router-link to=""><img src="../assets/img/title_pic.png" alt=""></router-link></li>
				<li><router-link to="">超市</router-link></li>
				<li><router-link to="">图书</router-link></li>
				<li><router-link to="">美妆</router-link></li>
				<li><router-link to="">童装童鞋</router-link></li>
				<li><router-link to="">全球购</router-link></li>
				<li><router-link to="">用品</router-link></li>
				<li><router-link to="">用品</router-link></li>
				<li><router-link to="">零食</router-link></li>
			</ul>
		</div>
		
		<HomeCom></HomeCom>
	<!-- 标题 结束-->
	
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCom from '@/components/HomeCom.vue'

export default {
  name: 'Home',
  components: {
	  HomeCom
  },
    data() {
      return {
      
      };
    },
	methods : {
		goto() {
			this.$router.push("/search")
		},
		msg() {
			this.$toast("消息提醒");
		}
	},
	created() {
		
	}
}
</script>
<style lang="less" scoped="scoped">
	.home {
		.header {
			display: flex;
			justify-content: space-between;
			background-color: #A94C68;
			align-items: center;
			padding: 0 0.24rem;
			.left {
				color: #fff;
				img {
					margin-top: 0.2rem;
				}
				span {
					font-size: 0.3rem;
					line-height: 0.3rem;
					color: #fff;
				}
			}
			.right {
				font-size: 0.3rem;
				line-height: 0.3rem;
				color: #fff;
				.van-icon {
					font-size: 0.5rem;
					margin: 0.2rem;
				}
			}
		}
		.home_title {
			ul::-webkit-scrollbar  {
				display: none;
			}
			ul {
				display: flex;
				align-items: center;
				flex-wrap: nowrap;
				padding-left: .2rem;
				color: #fff;
				height: 1rem;
				overflow-x: scroll;
				background-color: #A94C68;
				
				
				li {
					padding: 0;
					border: 0;
					margin: 0;
					text-align: center;
					white-space: nowrap;
					margin-right: .14rem;
					height: .78rem;
					line-height: .78rem;
					font-weight: 700;
					padding: .1rem .2rem;
					a {
						display: block;
						font-size: 0.25rem;
						width: 100%;
						height: 100%;
						color: #fff;
					}
					a:hover, .ula {
						border-bottom: 0.05rem solid #fff;
						border-radius: 0.03rem;
					}
					img {
						width: 1.24rem;
						height: .56rem;
						margin-top: 0.15rem;
					}
				}
			}
			
		}
			
	}
</style>
