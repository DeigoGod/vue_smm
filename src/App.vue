<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> 
		
    </div> -->
    <router-view/>
	
	<!-- //底部导肮 -->
	
	
	
	<div class="navfoot">
		<van-tabbar v-show="$route.meta.showtaber"   active-color="#ff6700" inactive-color="#999" v-model="active">
			<van-tabbar-item to="/">
				
				<template #icon="props">
			        <img :src="icon.homeactive"/>
				</template>
			</van-tabbar-item>
			<van-tabbar-item to="/category">
				<template #icon="props">
				    <img :src="icon.categoryinactive "/>
				</template>
			</van-tabbar-item>
			<van-tabbar-item to="/cart">
				<template #icon="props">
				    <img :src="icon.cartinactive "/>
				</template>
			</van-tabbar-item>
			<van-tabbar-item to="/mine">
				<template #icon="props">
				    <img :src="icon.mineinactive "/>
				</template>
			</van-tabbar-item>
		</van-tabbar>
	</div>
  </div>
</template>

<script>
	export default {
	  data() {
	    return {
		showtabbar : true,
	      active: 0,
		  icon: {
			homeactive: require('./assets/img/homesel.png'),
			
			categoryinactive: require('./assets/img/category.png'),
			
			cartinactive: require('./assets/img/cart.png'),
			
			mineinactive: require('./assets/img/mine.png'),
		  },
	    };
	  },
	  
	};
</script>

<style lang="less" scoped="scoped">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .navfoot {
	  img {
		  width: 1.5rem;
		  height: 0.98rem;
	  }
  }
}

</style>
