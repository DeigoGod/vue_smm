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
		  :price="good.price"
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
		
		
		<!-- 样例开始 -->
			<!-- <div class="box_cart" v-else>
				<van-empty
				  class="custom-image"
				  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
				  description="空空如也"
				/>
			</div> -->
		<!-- 样例结束 -->
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    
  },
  methods : {
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
