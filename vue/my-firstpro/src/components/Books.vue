<template>
	<div class="li-books">
		<ul>
			<li v-for="book in books">
				<div class="icon">
                	<img width="57" height="57" :src="book.icon"/>
              	</div>
				<h1>{{book.name}}</h1>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		 props: {
    			books:  []
  		}
	}
</script>

<style>
	.list-books{
		
	}
</style>