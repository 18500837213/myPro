<template>
	<div>
		<tho-header></tho-header>
		<thoughts></thoughts>
	</div>
</template>

<script>
	import thoHeader from "@/components/ThoHeader"
	import thoughts from "@/components/Thoughts"
	export default{
		components:{
			'thoHeader':thoHeader,
			'thoughts':thoughts
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style>
</style>