import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

//导入store的各个const变量
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// const state={
// 	count:10
// };
// const actions={
// 	increment:function({commit}){ //第一步 直接执行此函数 
// 		commit('increment2'); //第二步 触发increment2函数 
// 	}
// };
// const mutations={
// 	increment2:function(state){
// 		//alert(1);
// 		return state.count++;
// 	}
// };
// const getters={
// 	count(state){
// 		return state.count;
// 	}
// }


export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})