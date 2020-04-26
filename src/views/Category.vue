<template>
  <div class="category">
	
	<!-- 头部开始 -->
		<van-nav-bar
		  title="列表"
		  right-text="首页"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		/>
	<!-- 头部结束 -->
	
	
	<!-- 搜索开始 -->
		<van-search  @click="$router.push('/search')" placeholder="请输入搜索关键词" />
	<!-- 搜索结束 -->
	
	<!-- 列表布局 开始 -->
		<!-- 内容 -->
		<div class="list_data">
			<div class="list_left" >
				<van-sidebar v-model="activeKey"  >
				  <van-sidebar-item  class="bgs" v-for="(item,index) in categorydata" :key="index" :title="item.name"  />
				</van-sidebar>
			</div>
			<div class="list_right" > 
			<!-- 这层遍历16个分类 --> 
				<div class="waiceng" v-if="index == activeKey" v-for="(data,index) in categorydata" :key="index" >
					<!-- 这层遍历里面的 -->
					
					<div class="cells_auto_fill" >
						<img :src="data.img" alt="">
					</div>
					<!-- 以上时Ad 那张图片 -->
					<div class="baoceng">
						<div class="neiceng" v-for="(item,i) in data.list" :key="i">
							<router-link :to="{name : 'Detail',params : {id : item.id}}">
								<div class="img_box">
									<img :src="item.imageUrl" alt="">
									<p>{{item.name}}</p>
								</div>
							</router-link>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
			
	<!-- 列表布局 结束 -->
	<button style="position: absolute;z-index: 1000;" @click="tos"></button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CategoryList from '../data/categorylist.js'
export default {
  name: 'Home',
  components: {
		
  },
  data () {
	  return {
		  categorydata : CategoryList,
		  activeKey : 0
	  }
  },
   methods: {
	   tos() {
	   		 console.log(this.categorydata);
	   },
      onClickLeft() {
        this.$router.go("-1");
      },
      onClickRight() {
		this.$router.push("/");
      },
    },
}
</script>

<style scoped="scoped" lang="less">
	.category {
		.list_data {
			display: flex;
			width: 100%;
			.list_left {
				position: absolute;
				font-size: 0.1rem;
				bottom: 0;
				top: 100px;
				width: 23%;
				
				background-color: #fff;
				border-right: 1px solid #ddd;
				overflow-y: scroll;
				.van-sidebar-item--select {
					border: none;
					font-size: 0.3rem;
					color: #ff397e;
				}
			}
			.van-sidebar-item {
				background-color: #fff;
				width: 100%;
				font-size: 0.22rem;
			}
			.list_left::-webkit-scrollbar  {
				display: none;
			}
			.list_right {
				position: absolute;
				left: 23%;
				bottom: 0;
				top: 100px;
				width: 77%;
				overflow-y: scroll;
				.zu {
					display: flex;
					flex-wrap: wrap;
					.zu_flex {
						flex-basis: 33%;
						max-width: 33%;
						.text_w {
							font-size: 0.1rem;
						}
					}
					
					img {
						width: 100%;
					}
				}
				.cells_auto_fill {
					img {
						width: 100%;
					}
					
				}
				.baoceng {
					display: flex;
					
					.img_box {
						margin-top: 0.3rem;
						width: 50%;
						img {
							width: 100%;
						}
						p {
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
							font-size: 0.12rem;
							text-align: center;
						}
					}
				}
				
			}
		}
	}
</style>
