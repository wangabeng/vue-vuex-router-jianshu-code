const getters={
	showarticle(state){
		return state;
	},
	getText(state){
		return state.texts;
	},
	hideandshow(state){
		return state.hideandshow;
	},
	topicArticle(state){
		return state.topicArticle;
	},

	////切换hot reommend
	getHot(state){
		return state;
	},

	//
	// getTimeSort(state){
	// 	return state.topicArticle.recommend;
	// }
	showlogin(state){
		return state.showlogin;
	}
};
export default getters