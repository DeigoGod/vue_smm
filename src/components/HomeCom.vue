<template>
  <div class="homecom">
	  <!-- 轮播 开始 -->
			<div class="banner">
				<van-swipe class="bannerlunbo" :autoplay="3000">
					<van-swipe-item v-for="(item, index1) in datas.data.banner " :key="index1">
							<img v-lazy="item.pic" />
						</van-swipe-item>
				</van-swipe>
			</div>
	  <!-- 轮播 结束 -->
	  
	  <!-- 简单文字 开始 -->
			<div class="desc_text">
				<span class="nei" v-for="(item,index) in datas.data.brandDes" :key="index">
					<img :src="item.pic" alt="">
					<span>{{item.title}}</span>
				</span>
			</div>
	  <!-- 简单文字 结束 -->
	  
	  <!-- 图标导航  开始-->
		<div class="icon_nav">
			<ul>
				<li v-for="(item,index) in datas.data.shortcut" :key="index">
					<router-link to="">
						<img :src="item.pic" alt="">
						<p>{{item.title}}</p>
					</router-link>
				</li>
			</ul>
		</div>
	  <!-- 图标导航  结束-->
	  
	  <!-- 单纯的图片 开始 -->
		<div class="pic_1">
			<img src="../assets/img/pic_1.png" alt="">
		</div>
	  <!-- 单纯的图片 结束 -->
	  
	  <!-- 每日秒杀 开始 -->
	  <div class="kill">
		  <div class="day_kill">
			  <div class="box" style="display: flex;justify-content: space-between; align-items: center;">
				  <p>每日秒杀</p> <van-count-down :time="time" />
			  </div>
		  	
		  	<van-swipe :autoplay="3000">
		  		<van-swipe-item  v-for="(item, index1) in killpic " :key="index1">
		  				<img v-lazy="item.pic" />
		  				<img src="../assets/img/kill_2.png" alt="">
		  		</van-swipe-item>
		  	</van-swipe>
		  </div>
		  <div class="day_kill fenx">
		  	<p>分享赚</p>
		  	<img :src="datas.data.marketSeckill[1].info.imageOne" />
		  	<img :src="datas.data.marketSeckill[1].info.imageTwo" alt="">
		  </div>
	  </div>
	  <!-- 每日秒杀 结束 -->
	  
	  <!-- 商品列表1 开始 -->
	  <div class="box_list">
		  <div class="goodlist_1" v-if=" index > 1 && index < 6 " v-for="(item,index) in datas.data.marketSeckill" :key="index">
		  		 <div class="left">
					 <router-link to="">
						 <h2 class="p_1">{{item.info.titleOne}}</h2>
						 <h3 class="p_2">{{item.info.subTitleOne}}</h3>
						 <img :src="item.info.imageOne" alt="">
					 </router-link>
		  		 </div>
		  		 <div class="right">
					 <router-link to="">
						 <h2 class="p_1">{{item.info.titleTwo}}</h2>
						 <h3 class="p_2">{{item.info.subTitleTwo}}</h3>
						 <img :src="item.info.imageTwo" alt="">
					 </router-link>
		  			 
		  		 </div>
		  </div>
	  </div>
	  <!-- 商品列表1 结束 -->
	  
	  <!-- 精选榜单 开始 -->
	  
		<div class="jingxuan">
			<div class="left" v-if=" index == 6 " v-for="(item,index) in datas.data.marketSeckill" :key="index">
				<h2 class="p_1">{{item.title}}</h2>
				<h3 class="p_2">{{item.subTitle}}</h3>
			</div>
			<div class="right">
				<van-grid :border="false" :column-num="3">
				  <van-grid-item>
				    <van-image src="https://hzwimspic-1251601690.image.myqcloud.com/77024b50-6e8b-11ea-9356-a9fee8a75b2c_size_800x800?imageView2/w/120/h/120/q/80" />
				  </van-grid-item>
				  <van-grid-item>
				    <van-image src="https://hzwimspic-1251601690.image.myqcloud.com/21f829d0-6e8c-11ea-9356-a9fee8a75b2c_size_800x800?imageView2/w/120/h/120/q/80" />
				  </van-grid-item>
				  <van-grid-item>
				    <van-image src="https://hzwimspic-1251601690.image.myqcloud.com/5b791f10-6e8d-11ea-9356-a9fee8a75b2c_size_800x800?imageView2/w/120/h/120/q/80" />
				  </van-grid-item>
				</van-grid>
			</div>
		</div>
	  
	  <!-- 精选榜单 结束 -->
	  
	  
	  <!-- 单纯图片 2 开始 -->
		<div class="pic_2">
			<img src="../assets/img/pic_2.png" alt="">
		</div>
	  <!-- 单纯图片 2 结束 -->
	  
		<div class="mypin">
			<div class="my_top">
				<div class="top_left">
					我的频道
				</div>
				<div class="top_right">
					更多频道 >
				</div>
			</div>
			<div class="my_foot">
				<div class="content" v-for="(item,index) in mypin" :key="index">
					<router-link to="">
						<div class="pin_box">
							<img :src="item.picUrl" alt="">
							<h2>{{item.channelName}}</h2>
							<h3>{{item.channelDesc}}</h3>
						</div>
					</router-link>
					
				</div>
			</div>
		</div>
		
		
	  <!-- 精选开始 homejx -->
	  <div class="homejx">
		  
		<van-tabs>
		  <van-tab v-for="(item,index) in homejx" :title="item.name" :key="index">
				
				<div class="top">
					<img :src="item.data.pic" alt="">
				</div>
				<div class="footer">
					<p>{{item.data.desc}}</p>
					<div class="footer_nei">
						<span class="left">
							{{item.data.price}}
						</span>
						<span class="right">
							找相似
						</span>
					</div>
				</div>
		  </van-tab>
		</van-tabs>
	  </div>
	  <!-- 精选结束 -->
	 
	<button @click="tos"></button>
	
	<div class="footerbox">
		
	</div>
  </div>
</template>

<script>

	import Vue from 'vue';
	import { Lazyload } from 'vant';
	
	Vue.use(Lazyload);

import HomeData from '../data/homedata.js'
import HomeKillPic from '../data/killpic.js'
import MyPin from '../data/mypin.js'
import HomeJx from '../data/homejx.js'
import HomeHomes from '../data/HomeHomes.js'

export default {
  name: 'HelloWorld',
  components: {
  },
  data() {
	  return {
			datas : HomeData,
			killpic : HomeKillPic,
			mypin : MyPin,
			homejx : HomeJx,
			homehome : HomeHomes,
			time :  30 * 60 * 60 * 1000,
	  }
  },
 methods : {
	 tos() {
		 console.log(this.homehome);
	 }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.homecom {
		.banner {
			height: 2.52rem;
			overflow-x: hidden;
			padding: .1rem .24rem .12rem;
			border-radius: 0.3rem;
			img {
				width: 100%;
				height: 100%;
			}
			.bannerlunbo {
				height: 2.52rem;
			}
		}
		.desc_text {
			display: flex;
			justify-content: space-around;
			// margin-top: -0.2rem;
			.nei {
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					margin-right: .04rem;
					background: inherit;
					width: .24rem;
					height: .24rem;
				}
				span {
					line-height: .24rem;
					font-size: .2rem;
					color: rgb(255, 57, 126);
				}
			}
		}
		.icon_nav {
			padding: 0 .15rem;
			color: #000;
			
			overflow-x: scroll;
			margin: .32rem .22rem 0;
			background: none;
			ul {
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				li {
					margin-right: 0.1rem;
					padding: 0 .15rem;
					a {
						img {
							width: .86rem;
							height: .86rem;
						}
						p {
							// white-space: nowrap;
							font-size: 0.16rem;
							color: #000;
						}
					}
				}
			}
			
		}
		.pic_1 {
			padding: .1rem .24rem .12rem;
			img {
				width: 100%;
			}
		}
		.kill {
			display: flex;
			.day_kill {
				width: 40%;
				padding: .1rem .24rem .12rem;
				img {
					width: 50%;
				}
				p {
			
					color: #000;
					font-weight: 700;
					text-align: left;
				}
			}
			.fenx {
				width: 40%;
				img {
					width: 50%;
				}
			}
		}
		
		.box_list {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			.goodlist_1 {
				width: 50%;
				display: flex;
				justify-content: space-around;
				margin-top: 0.23rem;
				img {
					width: 1.2rem;
					height: 1.2rem;
				}
				.p_1 {
					font-size: 0.28rem;
					font-weight: 700;
					margin-top: -0.2rem;
				}
				.p_2 {
					font-size: 0.22rem;
					margin-top: -0.2rem;
					color: #999;
				}
			}
		}
		.jingxuan {
			padding: .24rem;
			// background-color: pink;
			.p_1 {
				font-size: 0.28rem;
				font-weight: 700;
				margin-top: -0.2rem;
			}
			.p_2 {
				font-size: 0.22rem;
				margin-top: -0.2rem;
				color: #999;
			}
		}
		.pic_2 {
			padding: .1rem .24rem .12rem;
			img {
				width: 100%
			}
			
		}
		
		.mypin {
			.my_top {
				display: flex;
				justify-content: space-between;
				padding: .1rem .24rem .12rem;
				.top_left {
					font-size: .34rem;
					line-height: .36rem;
					color: #000;
					font-weight: 700;
				}
				.top_right {
					    width: 1.42rem;
					    height: .4rem;
					    line-height: .4rem;
					    border: 1px solid #999;
					    border-radius: 50px;
					    font-size: .24rem;
					    color: #999;
				}
			}
			.my_foot::-webkit-scrollbar  {
				display: none;
			}
			.my_foot {
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				flex-wrap: nowrap;
				overflow-x: scroll;
				.content {
					margin: 0.3rem 0.35rem;
					img {
						width: 1.24rem;
						height: 1.24rem;
					}
					h2 {
						font-size: 0.28rem;
						font-weight: 700;
						margin-top: -0.2rem;
						white-space: nowrap;
					}
					h3 {
						font-size: 0.22rem;
						margin-top: -0.2rem;
						color: #999;
						white-space: nowrap;
					}
				}
			}
			
		}
		
		
		.homejx {
			.footer {
				p {
					font-size: .26rem;
					line-height: .36rem;
					color: #000;
					font-weight: 700;
				}
				.footer_nei {
					display: flex;
					justify-content: space-around;
					align-items: center;
					.left {
						color: #ff397e;
						font-size: .32rem;
					}
					.right {
						height: .48rem;
						width: 1.5rem;
						line-height: .48rem;
						border: 1px solid #ccc;
						border-radius: 0.3rem;
						font-size: 0.2rem;
					}
				}
				
			}
		}
		
		.footerbox {
			
			height: 50px;
		}
	}
</style>
