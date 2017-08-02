<template>
	<div class="setting-header">
		<div class="first-div">
			<div class="left"><img src="../images/icons/email.svg" /></div>
			<div class="center">陈冬冬 </div>
			<div class="right"><img src="../images/icons/setting.svg" /></div>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.setting-header{
		position: absolute;
		z-index:5;
		width:100%;
    	top:0;  
		height:5rem;
		line-height:5rem;
	}
	.setting-header .first-div{
		display: flex;
		vertical-align: middle;
	}
	.setting-header .left{
		  flex:1;
		  display: inline;
		  text-align: left;
		  margin-left: 1rem;
		  
	}
	.setting-header .left img{
		   height:1rem;
	}
	.setting-header .right img{
		   height:1rem;
	}
	.setting-header .center{
		 flex:1
		  
	}
	.setting-header .right{
		text-align: right;
		margin-right: 1rem;
		flex:1
	}
</style>