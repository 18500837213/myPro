<template>
 	<div class="flow-box">
 		<div class="container" @click="touchStart" ref="bb">
 			<div class="box" v-for="num in list" ref="box">
 				{{num}}
 			</div>
 		</div>
 	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				list:[1,2,3,4,5,6]
		
			}
		},
		 methods: {
		 	touchStart() {
		 		this.$refs.bb.className+=" transform"
 				 
          	this.$refs.box[5].style.display='none';
//          	pageB.css({'display' : 'block'});
//          	pageC.css({'display' : 'none'});
		 	}
		 },
 
	}
</script>

<style>
	.flow-box{
		height:80%;
		width:100%;
	}
	.container{
		position:relative;
        width:100%;
        height:100%;
        padding-top:40px;
        box-sizing:border-box;
        -webkit-transform:translate3d(0,0,0);
        -webkit-backface-visibility:hidden
	}
	.box{
		position:absolute;
        z-index:1;
        top:0;
        left:0;
        width:100%;
        height:100%;
       /* overflow:hidden;*/
        background-color:#c8c8c8
	}
	.transform{
		-webkit-transform: translate3d(-100%, 0px, 0px); -webkit-transition: 300ms; transition: 300ms;
	}
</style>