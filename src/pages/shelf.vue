<template>
	<div>
		<shelf-header></shelf-header>
		<div class="container-shelf">
			<list-books :books="books"></list-books>
		</div>
	</div>
</template>

<script>
	import listBooks from "@/components/Books"
	import shelfHeader from "@/components/ShelfHeader"
	import book2 from '@/images/books/book002.jpg'
	import book3 from '@/images/books/book003.jpg'
	import book4 from '@/images/books/book004.jpg'
	export default {
		components: {
			'listBooks': listBooks,
			'shelfHeader':shelfHeader,
		},
		data() {
			return {
				books: [{
					name: "战争与和平",
					icon: book2,
				}, {
					name: "爱的供养",
					icon: book3,
				}, {
					name: "爱的供养",
					icon: book4,
				}, {
					name: "爱的供养",
					icon: book3,
				}, {
					name: "爱的供养",
					icon: book2,
				}, {
					name: "爱的供养",
					icon: book4,
				}, {
					name: "爱的供养",
					icon: book3,
				}, {
					name: "爱的供养",
					icon: book2,
				}, {
					name: "爱的供养",
					icon: book4,
				}, {
					name: "爱的供养",
					icon: book3,
				}, {
					name: "爱的供养",
					icon: book2,
				}, {
					name: "爱的供养",
					icon: book4,
				}, {
					name: "爱的供养",
					icon: book3,
				}, {
					name: "爱的供养",
					icon: book2,
				}]
			}
		},
	}
</script>

<style>
	.container-shelf{
		width: 100%;
		overflow-y: scroll;
		position: absolute;
		z-index: 10;
		top:5rem;
		bottom:4rem;
		_height: 100%
	}
</style>