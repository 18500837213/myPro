<template>
	<div>
		<sub-list></sub-list>
	</div>
</template>

<script>
	import subList from "@/components/Subjects"
	export default{
		components:{
			'subList':subList
		},
		data(){
			return {
				lists:[{
					id:1,
					title:"hight"
				},{
					id:2,
					title:"width"
				}
				]
			}
		}
	}
</script>

<style>
</style>