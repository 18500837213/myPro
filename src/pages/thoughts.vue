<template>
	<div>
		<tho-header></tho-header>
		<div class="container-thoughts">
			<thoughts></thoughts>
		</div>
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
.container-thoughts{
		width: 100%;
		overflow-y: scroll;
		top: 0;
		position: absolute;
		z-index: 10;
		top:5rem;
		bottom: 5rem;
		_height: 100%
}
</style>