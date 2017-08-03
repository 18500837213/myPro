<template>
	<div class="container-discovery">
		<flow-box></flow-box>
	</div>
</template>

<script>
	import flowBox from '@/components/FlowBox'
	export default {
		components:{
			'flowBox':flowBox
		}
	}
</script>
<style>
	.container-discovery{
    width:100%;
    overflow-y:scroll;
    top:0;
    position:absolute;
    z-index:10;
    bottom:4rem;
    _height:100%
	 }
</style>