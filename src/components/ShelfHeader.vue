<template>
	<div class="shelf-header">
		<div class="first-div">
			<div class="left"><img src="../images/search.svg" /></div>
			<div class="center">书架 </div>
			<div class="right"><a>书城</a></div>
		</div>
	</div>
</template>

<script>
	
	export default {
		
	}
</script>

<style>
	.shelf-header{
		position: absolute;
		z-index:5;
		width:100%;
    	top:0;  
		height:5rem;
		line-height:5rem;
	}
	.shelf-header .first-div{
		display: flex;
		vertical-align: middle;
	}
	.shelf-header .left{
		  flex:1;
		  display: inline;
		  text-align: left;
		  margin-left: 1rem;
		  
	}
	.shelf-header .left img{
		   height:1rem;
	}
	.shelf-header .center{
		 flex:1
		  
	}
	.shelf-header .right{
		text-align: right;
		margin-right: 1rem;
		flex:1
	}
</style>