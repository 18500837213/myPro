<template>
	<div class="tho-header">
		 <div class="first-div">
			<span class="left">关注的人</span>
			<span class="right">精选想法</span>
			<img src="../images/quill.svg" /> 
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			 return {
				
			}
		}
	}
</script>

<style>
 .tho-header{
		position: absolute;
		z-index:5;
		width:100%;
    	top:0;  
		height:5rem;
		line-height:5rem;
	}
	.tho-header .first-div{
		display: block;
		vertical-align: middle;
		text-align: center;
	}
	.tho-header .left{
		  margin-left:0rem;
	}
	.tho-header .right{
		  margin-left:2rem;
	}
	.tho-header img{
		margin-top: 2rem;
		margin-right: 1rem;
		 height:1rem;
		 float: right;
	}
</style>