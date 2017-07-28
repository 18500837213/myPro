<template>
	<div class="container">
		<flow-box></flow-box>
		<footer-nav></footer-nav>
	</div>
</template>

<script>
	import footerNav from '@/components/FooterNav'
	import flowBox from '@/components/FlowBox'
	export default {
		components:{
			'footerNav':footerNav,
			'flowBox':flowBox
		}
	}
</script>
<style>
	*{
		margin: 0;
		padding:0;	
	}
	
	 .container{
	 	width:100%;
	 }
</style>