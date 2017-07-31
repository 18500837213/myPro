<template>
	<div>
		<list-books :books="books"></list-books>
	</div>
</template>

<script>
	import listBooks from "@/components/Books"
	export default {
		components: {
			'listBooks': listBooks,
		},
		data() {
			return {
				books: [{
					name:"战争与和平",
					icon:"aa.jpg",
				},{
					name:"爱的供养",
					icon:"aa.jpg",
				}]
			}
		},
	}
</script>

<style>

</style>