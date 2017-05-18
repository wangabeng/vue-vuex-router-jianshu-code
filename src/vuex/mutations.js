const mutations = {

	//const dodod='a',//不可以在此定义变量，只能是函数形式
	changeshow(state,str){ //别忘记加state参数
		//根据传递的str改变各个a标签的class绑定
		state.showTopic=str;

		//改变state中articles的值（其是对象 需要改变其指向）
		const allArticle = {
			hot:{
				fir: {
					author:'真心博士周美伶',
					title:'文章不只是写给自己看的-如何树立读者意识',
					time:'大约6小时之前',
					read:'8498',
					comment:'248',
					like:'2342',
					pay:'2',
					src:'./static/hot01.jpg'
				},
				sec: {
					author:'厨房小贼',
					title:'悦读者、越读者和阅读者',
					time:'大约6小时之前',
					read:'8498',
					comment:'248',
					like:'2342',
					pay:'2',
					src:'./static/hot02.jpg'
				},
				thi: {
					author:'缘梦6',
					title:'你有多关照读者，读者自然也就有多关照你',
					time:'大约6小时之前',
					read:'8498',
					comment:'248',
					like:'2342',
					pay:'2',
					src:'./static/hot03.jpg'
				}
			},
			new: {
				fir: {
					author:'狗富贵儿 ',
					title:'难受就哭，装什么阳光',
					time:'大约2小时之前',
					read:'879',
					comment:'12',
					like:'10',
					pay:'4',
					src:'./static/new.jpg'
				},
				sec: {
					author:'怀左同学',
					title:'妈妈做的饭，是世界上最好吃的饭',
					time:'大约3小时之前',
					read:'356',
					comment:'20',
					like:'15',
					pay:'4',
					src:'./static/new2.jpg'
				},
				thi: {
					author:'大肚子猫',
					title:'要想学好英语，先把语法书丢掉',
					time:'大约1小时之前',
					read:'3398',
					comment:'258',
					like:'232',
					pay:'88',
					src:'./static/new3.jpg'
				}
			},
			daily:{
				fir: {
					author:'尸叔',
					title:'如何让你的自拍，惊爆朋友圈？看我是怎么设计的',
					time:'大约2小时之前',
					read:'3750',
					comment:'70',
					like:'190',
					pay:'0',
					src:'./static/daily1.jpg'
				},
				sec: {
					author:'尸爸',
					title:'如何让你的自拍，惊爆朋友圈？看我是怎么设计的',
					time:'大约2小时之前',
					read:'3750',
					comment:'70',
					like:'190',
					pay:'0',
					src:'./static/daily2.jpg'
				},
				thi: {
					author:'尸姐',
					title:'如何让你的自拍，惊爆朋友圈？看我是怎么设计的',
					time:'大约2小时之前',
					read:'3750',
					comment:'70',
					like:'190',
					pay:'0',
					src:'./static/daily3.jpg'
				}
			}
		}
		//改变article的指向
		state.articles=allArticle[str];
	},
	//切换sidebar和rightbar的显示和隐藏(这个函数可以解决点击隐藏的功能 但是不能解决历史记录的问题，用路由的路径判断功能 配合v-if就可能解决v-if="$route.path!=='/bonus' ")
	toggleBar(state){//用v-if结合路径判断 完美解决历史记录问题 所以这个函数不起任何作用 仅仅当作走过的弯路的一个印记而已
		//console.log(state);
		//alert(1);
		//state.hideandshow=!state.hideandshow;
	},

	//切换hot reommend
	tabHot(state,str){
		state.showTopic=str;
		//alert(1);
		return state;
	},

	//sort排序 通过点击不同的按钮 对topicArticle排序 按时间 time 按热度 number，按关注度 concern
	timeSort(state,str){
		var objArr=[];
		var orig=state.topicArticle.recommend;
		for (var keys in orig){
			objArr.push(orig[keys]);
		}

		//数组排序
		for (var i = 0; i < objArr.length-1; i++) {
			if (parseInt(objArr[i][str])<parseInt(objArr[i+1][str])){
				var middle=objArr[i];
				objArr[i]=objArr[i+1];
				objArr[i+1]=middle;

			}
		}
		//把数组的值赋值给原始对象
/*		let n=0;
		for (var keys in orig){
			for (var innerkey in orig[keys]){
				orig[keys][innerkey]=objArr[n][innerkey];	
			}
			n++;
		}*/

		let n=0;
		for(var key in orig){
			orig[key]=objArr[n];
			n++;
		}

		return state;
	},

	//切换login和register
	tablogin(state,str){
		state.showlogin=str;
	}
}
export default mutations //千万不要忘记导出了