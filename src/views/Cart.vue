<template>
  <div class="cart">
	  <!-- 头部开始 -->
	  	<van-nav-bar
	  	  title="购物车信息"
	  	  right-text="首页"
	  	  left-arrow
	  	  @click-left="onClickLeft"
	  	  @click-right="onClickRight"
	  	/>
	  <!-- 头部结束 -->
	  <!-- <div class="title_box">
		  购物车信息
	  </div> -->
		<van-card v-if="good.name"
			v-for="(good,index) in $store.getters.getGoodList" :key="index"
		  :num="good.num"
		  :price="good.price * good.num"
		  :desc="good.desc"
		  :title="good.name"
		  :thumb="good.img"
		>
		
		  <template #footer>
			<van-button size="mini"  @click="changeNum(good.id,good.skuid,-1)">-</van-button>
			<van-button size="mini" @click="changeNum(good.id,good.skuid,+1)">+</van-button>
			<van-button size="mini" @click="remove(good.id,good.skuid)">删除</van-button>
		  </template>
		</van-card>
		
		<!-- 提交订单 开始 -->
			
			<div class="order">
				<van-submit-bar :price="price" button-text="更新金钱" @submit="onSubmit" />
			</div>
			
		<!-- 提交订单 结束 -->
		
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
		price : 0,
	}  
  },
  methods : {
	  onSubmit() {
		let money = 0;
		this.$toast("更新成功");  
		console.log(this.$store.getters.getGoodList);
		this.$store.getters.getGoodList.forEach( (val,index) => {
			if(index > 0) {
				money += val.num * val.price;
			}
		})
		this.price = money * 100;
		console.log(money)
		
		
	  },
	  onClickLeft() {
		  this.$router.go(-1);
	  },
	  onClickRight() {
		  this.$router.push("/")
	  },
	  changeNum( id,skuid,num) {
		  
		  
		  
		  
		  this.$store.dispatch("changeNumAsync",{
				id : id,
				skuid : skuid,
				num : num
		  }).then( res => {
				this.$toast("修改成功");
		  })
	  },
	  remove(id,skuid) {
		  this.$store.dispatch("reMoveAsync",{
			  id : id,
			  skuid : skuid
		  }).then( res => {
			  this.$toast("删除成功");
		  })
	  }
  },
}
</script> 

<style scoped="scoped" lang="less">
	.cart {
		.title_box {
			margin: 0.3rem 0;
			font-weight: 700;
		}
	}
</style>
