<template>
	<list-books :books="books"></list-books>
</template>

<script>
	import listBooks from "@/components/Books"
	export default {
		components: {
			'listBooks': listBooks
		},
		data() {
			return {
				books: [{
					name:"ss",
					icon:"aa.jpg",
				},{
					name:"ss",
					icon:"aa.jpg",
				}]
			}
		},
	}
</script>

<style>

</style>