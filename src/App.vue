<template>
  <div id="app">
    <router-view></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import footerNav from '@/components/FooterNav';
export default {
  name: 'app',
  components:{
			'footerNav':footerNav,
	}
}
</script>

<style>
html,body{
	height:100%;
	overflow:hidden;
}
::-webkit-scrollbar{
 				 display:none;
	}
*{
		margin: 0;
		padding:0;	
}
	
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  
}

</style>
