<template>
	<div class="container">
		<list-books :books="books"></list-books>
	</div>
</template>

<script>
	import listBooks from "@/components/Books"
	import book2 from '@/images/books/book002.jpg'
	import book3 from '@/images/books/book003.jpg'
	import book4 from '@/images/books/book004.jpg'
	export default {
		components: {
			'listBooks': listBooks,
		},
		data() {
			return {
				books: [{
					name:"战争与和平",
					icon:book2,
				},{
					name:"爱的供养",
					icon:book3,
				},{
					name:"爱的供养",
					icon:book4,
				},{
					name:"爱的供养",
					icon:book3,
				},{
					name:"爱的供养",
					icon:book2,
				},{
					name:"爱的供养",
					icon:book4,
				},{
					name:"爱的供养",
					icon:book3,
				},{
					name:"爱的供养",
					icon:book2,
				},{
					name:"爱的供养",
					icon:book4,
				},{
					name:"爱的供养",
					icon:book3,
				},{
					name:"爱的供养",
					icon:book2,
				},{
					name:"爱的供养",
					icon:book4,
				},{
					name:"爱的供养",
					icon:book3,
				},{
					name:"爱的供养",
					icon:book2,
				}]
			}
		},
	}
</script>

<style>
   .container{
    width:100%;
    overflow-y:scroll;
    top:0;
    position:absolute;
    z-index:10;
    bottom:5rem;
    _height:100%
	 }
</style>