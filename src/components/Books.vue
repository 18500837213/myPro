<template>
	<div class="li-books">
			<div v-for="book in books" class="book">
                	<img   :src="book.icon"/><br/>
                	<span>{{book.name}}</span>
			</div>
	</div>
</template>

<script>
	export default{
		 props: {
    			books:  {}
  		}
	}
</script>

<style>
 
	/*.li-books{
		overflow-y:scroll;
		height:100%;
	}*/
	.li-books{
		padding-top: 1rem;
		-moz-column-count:3; /* Firefox */
		-webkit-column-count:3; /* Safari and Chrome */
		column-count:3;
		font-size: .5rem;
	}
	.li-books  .book{
		margin-bottom:0.5rem;
		margin:1px;
		height:8rem;
	}
	.li-books .book img{
		height:6rem;
	}
</style>