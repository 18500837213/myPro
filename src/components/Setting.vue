<template>
	<div class="setting">
		<div class="title">
			<div class="more">&gt;</div>
			<img :src="info.icon" /><br />
			 <span>编辑个人资料</span>
			 
		</div>
		<p>&nbsp;</p>
		<div class="acount">
			<div class="left">账户</div>
			<div class="right">41.07<br/><span>已购143本</span></div>
		</div>
		<div class="ranking">
			好友排名
			<div class="right">第3名<br/><span>1小时4分钟</span></div>
		</div>
		<div class="attention">
			关注 
			<div class="right">已关注23人</div>
		</div>
		<p>&nbsp;</p>
		<div class="note">
			笔记
			<div class="right">7个<br/><span>3个赞 0个评论</span></div>
		</div>
		<div class="audio">
			音频
			<div class="right"><span>用声音传递文字的力量</span></div>
		</div>
		<div class="booklist">
			书单
			<div class="right">1个</div>
		</div>
	</div>
</template>

<script>
	import header1 from '@/images/headers/header001.jpg'
	export default{
		data:function(){
			return {
				info:{
					icon:header1
				}
			}
		}
	}
</script>

<style>
	.setting{
		width: 100%;
		
	}
	.setting .title{
		height:10rem;
		color:#888888;
	}
	.setting .title .more{
		position:absolute;
		right:1rem;
		top:2rem;
		width:2rem;
		padding-top: 1rem;
		height:2rem;
		font-weight: bold;
	}
	.setting .title img{
		border-radius: 100%;
		height:6rem;
	}
	.setting .acount{
		height:5rem;
		display:flex;
		/*justify-content:center;*/
		align-items: center;
		padding:0 1rem 0 1rem;
	}
	.setting .ranking{
		height:5rem;
		display:flex;
		/*justify-content:center;*/
		align-items: center;
		padding:0 1rem 0 1rem;
	}
	.setting .attention{
		height:5rem;
		display:flex;
		/*justify-content:center;*/
		align-items: center;
		padding:0 1rem 0 1rem;
	}
	.setting .note{
		height:5rem;
		display:flex;
		/*justify-content:center;*/
		align-items: center;
		padding:0 1rem 0 1rem;
	}
	.setting .audio{
		height:5rem;
		display:flex;
		/*justify-content:center;*/
		align-items: center;
		padding:0 1rem 0 1rem;
	}
	.setting .booklist{
		height:5rem;
		display:flex;
		/*justify-content:center;*/
		align-items: center;
		padding:0 1rem 0 1rem;
	}
	.setting p{
		background: #888888;
	}
	.setting .left{
		flex: 1;
		text-align: left
	}
	.setting .right{
		text-align: right; 
		flex: 1;
		display:inline-block;
	}	
	.right span{
		font-size: 0.5rem;
		color:#888888;
	}
</style>