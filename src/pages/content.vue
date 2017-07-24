<template>
	<div>
		<list-books :books="books"></list-books>
		<footer-nav></footer-nav>
	</div>
</template>

<script>
	import listBooks from "@/components/Books"
	import footerNav from "@/components/FooterNav"
	export default {
		components: {
			'listBooks': listBooks,
			'footerNav':footerNav
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