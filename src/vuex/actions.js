const actions={
	//关于vuex传参 详见：http://www.cnblogs.com/fayin/p/6445385.html
	//在html中使用的方法 <a href='javascript:void(0)' :class='{active:showarticle.showTopic=="hot"}' @click='changeshow("hot")'>热门</a>
	changeshow:function({commit,state},msg){ //第一步 直接执行此函数 
		commit('changeshow',msg); //第二步 触发increment2函数 
	},
	toggleBar:function({commit}){
		commit('toggleBar');
	},

	//切换hot reommend
	tabHot:function({commit},msg){
		commit('tabHot',msg);
	},

	//sort排序 通过点击不同的按钮 对topicArticle排序 按时间 time 按热度 number，按关注度 concern
	timeSort:function({commit},msg){
		commit('timeSort',msg);
	},

	//切换login和register
	tablogin:function({commit},msg){
		commit('tablogin',msg);
	}

};
export default actions