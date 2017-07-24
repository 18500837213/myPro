<template>
	<div class="li-books">
		<ul>
			<li v-for="book in books">
			  <div class="icon">
                	<img width="57" height="57" :src="book.icon"/>
                	<h1>{{book.name}}</h1>
              </div>
			</li>
		</ul>
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
	li{
		display:block;
		list-style: none;
		border-bottom: solid 1px lightgray;
		text-align: left;
	}
	li h1{
		vertical-align: middle;
		 display:inline-block;
	}
	li img{
		vertical-align: middle;
	}
</style>