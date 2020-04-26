<template>
  <div class="search">
	<van-nav-bar  left-arrow class="header"  @click-left="onClickLeft" @click-right="onClickRight">
		<input slot="title" v-model="value" type="text" placeholder="请输入搜索商品名称">
		<van-icon slot= "right" name="search" size="18" />
	</van-nav-bar>
	搜索页面
	
	<!-- 热门搜索 -->
	<p class="hot_search">
		<van-divider>可以搜素一下内容</van-divider>
	</p>
	<van-tag @click="search(item)"   plain  
		class="tags" v-for="(item,index) in hotsearch" 
		:type=" tagtypes[Math.floor(Math.random()*tagtypes.length)]" 
		size="large"
		:key="index">{{item}}</van-tag>
			
		<!-- 历史搜索 -->
		<div class="his_search">搜索发现</div>
		<van-tag  @click="search(item)"  plain  round
			class="tags" v-for="(item,index) in hissearch" 
			color="#666"
			size="large"
			:key="index"
			>{{item}}</van-tag>
	
  </div>
</template>

<style scoped="scoped" lang="less">
	.search {
		.header {
			background-color: #f2f2f2;
			input {
				border: 1px solid #e5e5e5;
				border-radius: .04rem;
				width: 100%;
				padding: 0 .2rem;
				outline: 0;
				font-size: .3rem;
				font-weight: 400;
				height: .5rem;
				line-height: normal;
			}
		}
		.hot_search {
			    line-height: .8rem;
			    padding: 0 .3rem;
			    font-size: .24rem;
			    text-align: left;
		}
		.his_search {
			    line-height: .8rem;
			    padding: 0 .3rem;
			    font-size: .24rem;
			    text-align: left;
		}
		img {
			width: 100%;
		}
		.tags {
			margin-left: 0.3rem;
		}
	}
</style>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
	
  },
  data() {
	  return {
		value : "",
		hotsearch : ["服务","租赁","店铺","育儿顾问","门店"],
		hissearch : ["宝宝","包包","衣服"],
		tagtypes:["primary","success","danger","warning"],
	  }
  },
  methods : {
	  search(searchText){
	  	this.$router.push({
	  		name:"SearchEnd",
	  		query:{
	  			key:searchText
	  		}
	  	})
	  },
	   onClickLeft() {
	        // this.$toast('按钮');
			this.$router.go(-1);
	      },
	      onClickRight() {
	        // this.$toast('按钮');
			if(this.value.length > 0) {
				 this.search(this.value);
			}else {
				this.$toast('不能为空');
			}
	      },
  }
}
</script>