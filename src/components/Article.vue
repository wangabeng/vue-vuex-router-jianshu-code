<template>
	<div class='article-cont'>
		<ul>
			<li v-for='value in showarticle.articles'>
				<p class='author-time'>
					<a href='#'>{{value.author}}</a><span>- {{value.time}}</span>
				</p>
				<h2 class='article-title'>
					<a href='#'>{{value.title}}</a>
				</h2>
				<p class='article-comment'>阅读 8498 - 评论 248 - 喜欢 2342 - 打赏 2</p>
				<img :src="value.src"><!--指令的值是不需要加{{}}-->
			</li>

		</ul>

	</div>
</template>
<style>
	.article-cont{
		height:auto;
	}
	.article-cont ul{
		overflow:hidden;
	}
	.article-cont li {
		position:relative;
		padding-left:20px;
		border-bottom:1px dashed #d9d9d9;
	}
	.article-cont li img{
		width:100px;
		height:100px;
		position:absolute;
		right:10px;
		top:10px;
		border-radius:5px;
	}
	.author-time{
		padding-top:20px;
		font-size:12px;
		line-height:2;
	}
	.author-time a{
		color:#56b7df;
	}
	.author-time span{
		color:#717171;
	}
	.article-title{
		height:36px;
		color:#555555;
		line-height:2;
		font-size:18px;
	}
	.article-comment{
		color:#717171;
		font-size:12px;
		line-height:1.5;
		padding-bottom:20px;
	}
</style>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default {
	  computed:mapGetters([
	    'showarticle'//是个函数,
	  ]),
	  methods:mapActions([
	    'changeshow'
	  ])

	}
</script>