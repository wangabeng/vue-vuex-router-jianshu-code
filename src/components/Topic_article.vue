<template>
	<div class='topic'><!-- 分左边的topic-image和右边的内容区 -->
		<div class='topic-image'></div>
		<!--右侧主内容区开始-->
		<div class='topic-cont'>
			<nav>

				<!-- input输入框开始 -->
				<div class='search'>
					<input type='search' placeholder='搜索'>
					<i class='fa fa-search'></i>
				</div>
			</nav>

			<div class='article-list'>
				<ul class='taglist'>
					<li>
						<a href='javascript:void(0)' @click='tabHot("hot")' :class='{active:getHot.showTopic=="hot"}'>热门</a>
					</li>
					<li>
						<a href='javascript:void(0)' class='recommend' @click='tabHot("recommend")' :class='{active:getHot.showTopic=="recommend"}'>推荐</a>
					</li>
				</ul>

				<div class='sort' v-if='getHot.showTopic=="recommend"'>
					<a href='javascript:void(0)' @click='timeSort("time")'>最新更新</a>
					<a href='javascript:void(0)' @click='timeSort("number")'>&nbsp;·&nbsp;热门排序&nbsp;·&nbsp;</a>
					<a href='javascript:void(0)' @click='timeSort("concern")'>关注度排序</a>
				</div>

				<div class='topic-list'>
					<ul>
						<li v-for='value in getHot.topicArticle[getHot.showTopic]'>
							<img class='topic-img' :src='value.img'>
							<div class='topic-detail'>
								<h3>{{value.title}}</h3>
								<p class='topic-text'>{{value.par}}</p>
								<p class='topic-tag-word'>
									<span class='amount'>{{value.number}}篇文章</span>&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;<span class='cencern'>{{value.concern}}人关注</span>&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-tags'></i>&nbsp;&nbsp;<span class='topic-keyword'>{{value.keys}}</span>
								</p>	
							</div>
							<div class='topic-input'>
								<button><i class='fa fa-fw fa-plus'></i>&nbsp;|&nbsp;添加关注</button>
							</div>
						</li>
					</ul>
				</div>
			</div>	
		</div><!--右侧主内容区结束-->

	</div>
</template>
<style>
	/*.topic-image{
		position:fixed;
		width:200px;
		background:url('../../static/back-3.jpg') no-repeat;
		height:100%;

	}写在css中再测试
	*/

	.topic-cont{
		margin-left:200px;
		overflow:hidden;
	}

	.topic-cont nav{
		height:50px;
		border-bottom: 1px solid #efefef;
	}
	.topic-cont nav ul{
		float:left;
		overflow:hidden;
		padding-left:10px;
	}
	.topic-cont nav ul li{
		float:left;
		font-size:12px;
		height:49px;
		line-height:49px;
		margin:0 5px;
	}
	.topic-cont nav ul li.active{
		border-bottom:1px solid  #000000;
	}
	.topic-cont nav ul li a{
		float:left;
		padding:0 15px;
	}
	.topic-cont nav ul li a:hover{
		background-color:#eeeeee;
	}

	.topic-cont .search{
		overflow:hidden;
		float:right;
		padding-top:15px;
		padding-right:10px;
		position:relative;
	}
	.topic-cont .search input{
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
	.topic-cont .search input:focus{
		border:1px solid #74b9ef;
	}
	.topic-cont .search .fa-search{
		position:absolute;
		right:18px;
		top:20px;
	}

	.sort{
		padding-left:25px;
		padding-top:30px;
		font-size:14px;
	}

	.topic-list ul{
		padding-top:30px;
	}
	.topic-list li{
		width:580px;
		margin-left:20px;
		overflow:hidden;	
		border-bottom: 1px dashed #d9d9d9;
		padding-bottom:5px;
		margin-bottom:20px;
	}
	.topic-img{
		width:40px;
		height:40px;
		border-radius:50%;
		border: 2px solid #fff;
		float:left;
		margin-left:3px;
	}
	.topic-detail{
		float:left;
		width:356px;	
		padding-left:15px;
	}
	.topic-detail h3{
		font-size:14px;
	}
	.topic-text{
		font-size:12px;
		color:#999999;
		padding-top:5px;
		padding-bottom:5px;
	}
	.topic-tag-word{
		font-size:12px;
		color:#999999;
		padding-top:5px;
		padding-bottom:5px;
	}
	.amount{
		color:#4094c7;
	}
	.topic-input{
		float:right;
		margin-top:30px;
		margin-right:5px;
	}
	.topic-input button{
		width:100px;
		height:26px;
		background-color:#49be38;
		border-radius:13px;
		outline:none;
		border:0;
		line-height:26px;
		color:#fff;
	}

</style>

<script>
	import {mapGetters,mapActions} from 'vuex'
	const getHot=mapGetters([
	    'getHot'
	  ]);
	export default {
	  computed:getHot,
	  methods:mapActions([
	  	'tabHot',
	  	'timeSort'
	  ])

	}
</script>