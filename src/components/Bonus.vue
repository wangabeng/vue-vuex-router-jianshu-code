<template>
	<div class='bonus'>
		<div class='bonus-header'>
			<h2><span>简书2015</span>  ·  每月一篇好文章</h2>
		</div>

		<div class='bonus-share'>
			<ul>
				<li><a href="#"><i class="fa fa-mobile"></i>手机查看效果更佳</a></li>
				<li><a href="#"><i class="fa fa-weibo"></i>分享到微博</a></li>
				<li><a href="#"><i class="fa fa-wechat"></i>分享到微信</a></li>
				<li><a href="#">更多分享</a></li>
			</ul>
		</div>

		<div class='bonus-content'>
			<ul>
				<li v-for='value in getText' :style="{background:value.bg,backgroundSize:'100%',backgroundRepeat:'no-repeat',backgroundColor:'#ffffff'}">
					<div class='detail'>
						<h3>{{value.title}}</h3>
						<div class='line'></div>
						<p class='poemtext'>
							{{value.content_1}}<br>
							{{value.content_2}}<br>	
							{{value.content_3}}<br>	
							{{value.content_4}}<br>	
							{{value.content_5}}<br>	
							{{value.content_6}}<br>	
						</p>
					</div>

					<a class='mask'><span>阅读全文</span></a>
				
				</li>

			</ul>
		</div>

		<div class='goback'><a href='#' @click='testdo'><i class="fa fa-home"></i>&nbsp;&nbsp;返回</a></div>
		<!-- 一个bug 点击返回 页面回到主页面 此时sidebar和右侧rightbar正常显示 一切正常 但是如果用浏览器的上一步 此时sidebar和右侧rightbar仍然正常显示 因为控制sidebar和右侧rightbar的数据没发生改变 不是通过点击实现的 这里涉及到一个问题是关于：vue-router组件内部实现跳转方法。有待于进一步研究 参见http://yaohuitao.com/?p=335     https://segmentfault.com/q/1010000009136709  -->
	</div>
</template>

<style>
	.bonus{
		position:absolute;
		min-width:1000px;
		width:100%;
		height:500%;
		left:0;
		z-index:100;
		background-color:#f3f3f3;
		-background-color:blue;
	}

	.bonus-header{
		padding-top:36px;
		padding-bottom:30px;
	}
	.bonus-header h2{
		text-align:center;
		font-size:34px;
		font-weight:normal;
		color:#000000;
	}
	.bonus-header h2:before,.bonus-header h2:after{
		content:'';
		display:inline-block;
		width:50px;
		height:1px;
		background-color:#d5d5d5;
		margin-right:10px;
		margin-left:10px;
		position:relative;
		top:-8px;
	}
	.bonus-header h2 span{
		color:#fb7f6e;
	}

	.bonus-share{
		overflow:hidden;
		text-align:center;
		
	}
	.bonus-share ul{
		display:inline-block;
		margin:0 auto;
	}
	.bonus-share li{
		float:left;
		margin:0 10px 0 15px;
	}
	.bonus-share li .fa{
		padding-right:8px;
	}

	.bonus-content {
		margin-top:20px;
	}
	.bonus-content ul{
		overflow:hidden;
	}
	.bonus-content li{
		width:322px;
		height:660px;
		/*background:url('../../static/bonus_1.jpg') 0% 0% / 100% no-repeat #ffffff;让图片自动适应宽高 不需要ps修改图片大小了*/
		margin-right:10px;
		float:left;
		position:relative;
		margin-bottom:20px;
		box-shadow: 5px 5px 10px #d5d5d5;
	}
	.detail {
		padding-top:270px;
	}
	.detail h3{
		text-align:center;
		font-size:14px;
	}
	.detail .line{
		text-align:center;
		width:50px;
		height:1px;
		background:#d5d5d5;
		margin:20px auto 20px auto;
	}
	.detail p{
		text-align:center;
		line-height:20px;
		font-size:12px;
	}

	.mask{
		position:absolute;
		background-color: #efefef;
		width:342px;
		height:660px;
		left:0;
		top:0;
		opacity:0;
		text-align:center;
	}
	.mask:hover{
		opacity:0.8;
	}
	.mask span{
		background-color:#F5674C;
		display:inline-block;
		width:100px;
		height:32px;
		border-radius:5px;
		line-height:32px;
		color:#ffffff;
		margin-top:292px;
	}
	.mask:hover{
		cursor:pointer;
	}
	.goback{
		text-align:center;
		padding-top:10px;
		padding-bottom:40px;
	}
</style>

<script>
	import router from '../main.js'	

	import {mapGetters,mapActions} from 'vuex'
	const {toggleBar}=mapActions([
	    'toggleBar'
	])

	export default {
	  computed:mapGetters([
	    'getText'//是个函数,
	  ]),
	  methods:{
	  	toggleBar,

	  	//goback 返回上一步 路由跳转的测试 这样还是不可以解决点击浏览器数据未改变的问题 。
	  	testdo(){
	  		//alert(1);
	  		//router.go(1);
	  		//router.push('home/article')//用push这一步的跳转在浏览器的历史记录里
	  		//router.replace('home/article');//用replace这一步的跳转在浏览器的历史记录里
	  		//this.toggleBar();//自己调用自己的方法
	  		window.history.go(1);
	  	}
	  }

	}
</script>
