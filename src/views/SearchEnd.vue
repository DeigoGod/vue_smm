<template>
	<div class="searchend">
		<div class="headerbox"></div>
		<van-nav-bar  left-arrow class="header" fixed="fixed" @click-left="onClickLeft" @click-right="onClickRight">
			<input slot="title" v-model="value" type="text" placeholder="请输入搜索商品名称">
			<van-icon slot= "right" name="search" size="18" />
		</van-nav-bar>
		<div class="endres">
			<div v-for="(item,index) in datas" :key="index" class="result">
				<div class="left">
					<img :src="item.img" alt="">
				</div>
				<div class="right">
					<div class="name">
						{{item.name}}
					</div>
					<div class="desc">
						{{item.desc}}
					</div>
					<div class="price">
						{{item.price}}
					</div>
				</div>
			</div>
		</div>
		<div class="footerbox"></div>
	</div>
</template>

<script>
	export default {
	  name: 'Home',
	  components: {
		
	  },
	  data() {
		  return {
			  value : "",
			  datas : []
		  }
	  },
	  methods : {
			onClickLeft() {
		        // this.$toast('按钮');
				this.$router.go(-1);
		      },
			onClickRight() {
		        // this.$toast('按钮');
				if(this.value.length > 0) {
					this.$router.push({
					  name:"SearchEnd",
					  query:{
						  key:this.value
					  }
					})	  
				}else {
					this.$toast('不能为空');
				}
		      }
	  },
	  created() {
	  	this.value = this.$route.query.key;
	  	this.$api.getSearchAPI({
	  		key : this.$route.query.key
	  	}).then(res => {
	  		this.datas = res.data		  
	  	}).catch(err => {
	  		this.$toast("错误");
	  	})
	  }
	}
</script>

<style scoped="scoped" lang="less">
	.searchend {
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
		.endres{
			.result{
				display: flex;
				align-items: center;
				.left{
					flex-basis: 40%;
					max-width: 40%;
					img{
						width: 100%;
					}
				}
			}
		}
		.headerbox {
			height: 46px;
		}
		.footerbox {
			height: 50px;
		}
	}
	
</style>
