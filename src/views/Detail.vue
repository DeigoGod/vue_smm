<template>
  <div class="detail" v-if="datas">
	详情页面{{$route.params.id}}
		<!-- 轮播开始 -->
		<div class="lunbo">
			<van-swipe class="lunbo_nei" :autoplay="3000" indicator-color="white">
			  <van-swipe-item v-for="(item,index) in selectGood.pic_list" :key="index">
				  <img v-lazy="item.url"/>
			  </van-swipe-item>
			</van-swipe>
		</div>
		<!-- 轮播结束 -->
		
		<!-- 价格开始 -->
		<div class="price">
			￥{{selectGood.price}}
			<del v-if="selectGood.market_price">￥{{selectGood.market_price}}</del>
		</div>
		<!-- 价格结束 -->
		
		<!-- 标题开始 -->
			<div class="name">
				<van-tag plain type="danger">孩子王直营</van-tag>
				{{selectGood.name}}
			</div>
		<!-- 标题结束 -->
		
		<!-- 单元格展示1 开始 -->
			<div class="cell_box">
				<van-cell title="不支持7天无理由退款" is-link arrow-direction="down" value="" />
			</div>
		<!-- 单元格展示1 结束 -->
		
		<!-- 选择机型样式开始 -->
			<div class="select">
				<van-cell-group>
				  <van-cell @click="select" title="已选" :value="selectGood.name" is-link />
				</van-cell-group>
			</div>
			<van-sku
			  v-model="show"
			  :sku="sku"
			  :goods="goods"
			  hide-stock
			  
			  :message-config="messageConfig"
			  
			  @sku-selected = "onSkuSelect"
			  @buy-clicked="onBuyClicked"
			  @add-cart="onAddCartClicked"
			/>
		<!-- 选择机型样式结束 -->
		
		<!-- 注意开始  -->
		
			<div class="cell_box" style="height: 0.5rem;line-height: 0.5rem; font-size: 0.2rem; color: red;">
				<span  value="" />
				{{datas.freight}}
				</span>
			</div>
		
		<!-- 注意结束 -->
		
		
		<!-- 快捷加入购物车开始 -->
			<div class="join_cart">
				<van-goods-action>
				<van-goods-action-icon icon="wap-home-o" text="首页" @click="onClickHome" />
				<van-goods-action-icon icon="chat-o" text="客服" @click="onClickService" />
				<van-goods-action-icon icon="cart-o" text="购物车" @click="onClickCart" />
				<van-goods-action-button
				    type="warning"
				    text="加入购物车"
				    @click="onAddCartClickedZhu"
				  />
				  <van-goods-action-button
				    type="danger"
				    text="立即购买"
				    @click="onBuyClickedZhu"
				  />
				</van-goods-action>
			</div>
		<!-- 快捷加入购物车结束 -->
		<div class="footerbox"></div>
		
		
		
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Detail',
	components: {
		
	},
	data() {
		return{
			show : false,
			sku: {
			  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
			  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
			  tree: [
				// {
				//   k: '颜色', // skuKeyName：规格类目名称
				//   v: [
				// 	{
				// 	  id: '30349', // skuValueId：规格值 id
				// 	  name: '水晶芝兰', // skuValueName：规格值名称
				// 	  imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
				// 	  previewImgUrl: 'https://img.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
				// 	},
				// 	{
				// 	  id: '1215',
				// 	  name: '蓝色',
				// 	  imgUrl: 'https://img.yzcdn.cn/2.jpg',
				// 	  previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
				// 	}
				//   ],
				//   k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
				// },
				// {
				// 	k : '版本'	,
				// 	v : [
				// 		{
				// 			id : '333',
				// 			name : '128g+56G'
				// 		}
				// 	],
				// 	k_s : 's8'
				// }
			  ],
			
			  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
			  list: [
				// {
				//   id: 2259, // skuId，下单时后端需要
				//   price: 100, // 价格（单位分）
				//   s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
				//   s8: '333', // 规格类目 k_s 为 s2 的对应规格值 id
				//   s3: '0', // 最多包含3个规格值，为0表示不存在该规格
				//   stock_num: 110 // 当前 sku 组合对应的库存
				// }
			  ],
			  price: '1.00', // 默认价格（单位元）
			  stock_num: 227, // 商品总库存
			  collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
			  none_sku: false, // 是否无规格商品
			  messages: [
				{
				  // 商品留言
				  datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
				  multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
				  name: '留言', // 留言名称
				  type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
				  required: '0', // 是否必填 '1' 表示必填
				  placeholder: '' // 可选值，占位文本
				}
			  ],
			  hide_stock: false // 是否隐藏剩余库存
			},
			goods: {
					// 数据结构见下方文档
			},
			messageConfig: {
					// 数据结构见下方文档
			},
			datas : "",
			selectGood : "",
		}
	},
	methods: {
		select () {
			this.show = true;
		},
		onClickHome() {
			this.$router.push("/");
		},
		onClickService() {
			this.$toast("客服");
		},
		onClickCart() {
			this.$router.push("/cart");
		},
		onSkuSelect(data) {
			if(data.selectedSkuComb) {
				this.datas.good_info.forEach( (val,index) => {
					if(val.goods_id == data.selectedSkuComb.id) {
						this.selectGood = val
					}
				})
			}
		},
		onBuyClicked() {
			this.$toast('购买');
		},
		onAddCartClicked(good) {
			this.$store.dispatch("addGoodAsync", {
				 id : this.datas.product_id,
				 skuid : this.selectGood.goods_id,
				 name : this.selectGood.name,
				 price : this.selectGood.price,
				 img : this.selectGood.pic_list[0].url,
				 num : good.selectedNum,
			}).then( res => {
				console.log(this.selectGood.name,"=======");
				console.log(this.selectGood.goods_id,"=======");
				console.log(this.selectGood.price,"=======");
				console.log(this.selectGood.pic_list[0].url,"=======");
				this.$toast("加入成功");
				
			});
		},
		onAddCartClickedZhu(good) {
			this.$store.dispatch("addGoodAsync", {
				 id : this.datas.product_id,
				 skuid : this.selectGood.goods_id,
				 name : this.selectGood.name,
				 price : this.selectGood.price,
				 img : this.selectGood.pic_list[0].url,
				 num : 1,
			}).then( res => {
				this.$toast("加入成功");
			});
		},
		onBuyClickedZhu() {
			this.$toast('购买');
		}
		
	},
	created() {
		this.$api.getDetailDataAPI( {
			linkpath : this.$route.params.id
		}).then( res => {
			res.data.forEach( (val) => {
				if( val.linkpath == this.$route.params.id) {
					this.datas = val;
					this.selectGood = this.datas.good_info[0];
					
					//遍历插入tree中
					// console.log(this.datas.buy_opation[0].list);
					this.datas.buy_opation.forEach( (val) => {
						//获取颜色
						let list = [];
							val.list.forEach( c => {
								// console.log("=====", val.list)
								list.push({
									id : c.prop_value_id,
									name : c.name
								})
							})
						//插入组合的样式
							this.sku.tree.push({
								k : val.name,
								v : list,
								k_s : `s${val.prop_cfg_id}`
							})
							
						//返回组合结果
						this.datas.good_info.forEach( good => {
							let g = {
								id : good.goods_id,
								price : good.price * 100,
								stock_num: 227,
							}
							
							good.prop_list.forEach( p => {
								g['s' + p.prop_cfg_id] = p.prop_value_id;
							})
							this.sku.list.push(g);
						})
					})
				}
			})
			// console.log(this.datas)
			// console.log(this.selectGood)
		}).catch( err => {
			this.$toast("数据请求失败");
		})
	}
}
</script>

<style scoped="scoped" lang="less">
	.detail {
		.footerbox {
			height: 50px;
		}
		.lunbo {
			width: 100%;
			.lunbo_nei {
				img {
					width: 90%;
				}
			}
		}
		.price {
			color: #ff397e;
			font-size: .48rem;
			text-align: left;
			padding: 0 0.23rem;
			del {
				font-size: 0.30rem;
				color: #333;
			}
		}
		.name {
			font-size: 0.30rem;
			font-weight: 700;
			text-align: left;
			padding: 0 0.23rem;
			margin-top: 0.2rem;
		}
		.cell_box {
			border-top: 1px solid #eee;
			border-bottom: 1px solid #eee;
			width: 90%;
			margin-top: 0.23rem;
			margin-left: 0.3rem;
			
			span {
				font-size: 0.15rem;
			}
		}
	}
</style>
