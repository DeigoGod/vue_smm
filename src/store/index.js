import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	goodList : [
		{
		  // goodid : 10000220,
		  // skuid : 2201100018,
		  // name : "手机",
		  // pric e : "",
		  // desc : "",
		  // img : "",
		  // num : 10,
					  
		},
	]
  },
  getters : {
	  getGoodList(state) {
	  		return state.goodList;
	  }
  },
  mutations: {
		addGood(state,good) {
		  let canAdd = true;
		  state.goodList.forEach((val,index) => {
			  if(val.id == good.id) {
				  if( val.skuid == good.skuid ) {
					  canAdd = false;
					  val.num += good.num;
				  }
			  }
		  })
		   if(canAdd) {
			   state.goodList.push(good);
		   }
		},
		
		
		
		
		
		remove(state,good) {
			  let index = -1;
			  state.goodList.forEach( (item,i) => {
				  if(item.id == good.id && item.skuid == good.skuid) {
					  index = i;
				  }
			  })
			  if(index >= 0) {
				  state.goodList.splice(index,1);
			  }
		},
		changeNum(state,good) {
			state.goodList.forEach( (val,index) => {
				if(val.id == good.id && val.skuid == good.skuid) {
						
						if(val.num > 0) {
							val.num += good.num;
							
						}else {
							val.num = 1;
						}
				}
			})
		},
		
		
		
		
  },
  actions: {
	  addGoodAsync(context,good) {
	  		context.commit("addGood",good);
	  },
	  reMoveAsync(context,good) {
		  context.commit("remove",good);
	  },
	  changeNumAsync(context,good) {
		  context.commit("changeNum",good);
	  },
	 
  },
  modules: {
  }
})
