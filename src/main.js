import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//注册VueRouter
Vue.use(VueRouter)

//导入home组件
import Home from './components/Home.vue' 
import Article from './components/Article.vue' 
import Bonus from './components/Bonus.vue' 
import Topic_article from './components/Topic_article.vue' 
import Download from './components/Download.vue' 
import Login from './components/Login.vue' 

//导入store.js 这里是个很大的坑 不可以用大写 Store 否则会出错
import store from './vuex/store.js'

const routes=[
	{
		path:'/home',
		component:Home,
		children:[{
			// 要在home组件里为子组件留下展示的空间 即 router-view
			path:'/home/article',//注意地址写完整 这里是个坑 被坑过
			component:Article
		}]
	},
	{
		path:'*',
		redirect:'/home/article' //默认跳转页面
	},
	{
		path:'/bonus',
		name:'Bonus',
		component:Bonus 
	},
	{
		path:'/topic',
		component:Topic_article
	},
	{
		path:'/download',
		component:Download 
	},
	{
		path:'/login',
		component:Login 
	}
];
const router=new VueRouter({
	routes
});

new Vue({
  el: '#app',
/*  data:{
  	leftBar:'home'
  },*/
  router,
  store,
  render: h => h(App)
});

export default router//导出router 给Bonus组件

