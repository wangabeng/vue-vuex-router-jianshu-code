<template>
	<div class='maincont'><!-- 分左边的cover-image和右边的article-page -->
		<div class='cover-image'></div>
		<!--右侧开始-->
		<div class='article-page'>
			<nav>
				<ul>
					<li class='active'><router-link to='/home/article'>发现</router-link></li>
					<li><router-link  to='/bonus'>2017精选</router-link></li>
					<!--@click.native='toggleBar'不再需要了-->
					<!--大坑 大坑 说router-link在在 HTML5 history 模式下，才会阻止点击事件 @click.native可以解决 -->
				</ul>
				<!-- input输入框开始 -->
				<div class='search'>
					<input type='search' placeholder='搜索'>
					<i class='fa fa-search'></i>
				</div>
			</nav>
			<div class='article-list'>
				<ul class='taglist'>
					<li><a href='javascript:void(0)' :class='{active:showarticle.showTopic=="hot"}' @click='changeshow("hot")'>热门</a></li>
					<li><a href='javascript:void(0)' :class='{active:showarticle.showTopic=="new"}' @click='changeshow("new")'>新上榜</a></li>
					<li><a href='javascript:void(0)' :class='{active:showarticle.showTopic=="daily"}' @click='changeshow("daily")'>七日热门</a></li>
					<li><a href=''>三十日热门</a></li>
					<li><a href=''>有奖活动</a></li>
					<li><a href=''>简书出版</a></li>
					<li><a href=''>简书播客</a></li>
					<li><a href=''>时事新闻</a></li>
				</ul>

				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<style>
	/*.cover-image{
		position:fixed;
		width:200px;
		background:url('../../static/back-2.jpg') no-repeat;
		height:100%;

	}
	写在css中再测试
	*/

	.article-page{
		margin-left:200px;
		overflow:hidden;
	}

	.article-page nav{
		height:50px;
	}
	.article-page nav ul{
		float:left;
		overflow:hidden;
		padding-left:10px;
	}
	.article-page nav ul li{
		float:left;
		font-size:12px;
		height:49px;
		line-height:49px;
		margin:0 5px;
	}
	.article-page nav ul li.active{
		border-bottom:1px solid  #000000;
	}
	.article-page nav ul li a{
		float:left;
		padding:0 15px;
	}
	.article-page nav ul li a:hover{
		background-color:#eeeeee;
	}

	.article-page .search{
		overflow:hidden;
		float:right;
		padding-top:15px;
		padding-right:10px;
		position:relative;
	}
	.article-page .search input{
		float:left;
		height:26px;
		line-height:26px;
		width:140px;
		padding:0 20px 0 10px;
		border-radius:13px;
		outline:none;
		border:0;
		font-size:14px;
		
	}
	.article-page .search input:focus{
		border:1px solid #74b9ef;
	}
	.article-page .search .fa-search{
		position:absolute;
		right:18px;
		top:20px;
	}
	.article-list .taglist{
		overflow:hidden;
		-height:40px;
		padding:10px 15px;
	}
	.article-list .taglist li{
		float:left;
		margin:5px;
	} 
	.article-list .taglist li a{
		float:left;
		padding:5px 10px;
		font-size:12px;
		border:1px solid #d9d9d9;
		border-radius:8px;
	}
	.article-list .taglist li a.active{
		background-color:#de533a;
		color:white;
	}
</style>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default {
	  computed:mapGetters([
	    'showarticle',//是个函数,
	    'hideandshow'
	  ]),
	  methods:mapActions([
	    'changeshow',
	    'toggleBar'
	  ])

	}
</script>