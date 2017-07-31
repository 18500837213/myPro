<template>
 	<div class="flow-box">
 		<div class="container" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" ref="container">
 			<div class="box" v-for="num in list" ref="box" :order="num" :len="list.length">
 				{{num}}
 			</div>
 		</div>
 	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				list:[0,1,2,3,4,5,6]
		
			}
		},
		 methods: {
		 	touchStart(e) {
//		 		var container=this.$refs.container;
//		 		container.style.webkitTransform='translate3d(-100%, 0, 0)';
//		 		container.style.webkitTransition='300ms';
//		 		container.style.transition='300ms';
		 	//	 el && (el.style.webkitTransform = 'translate3d(' + x + (unit || 'px') + ',0,0)')
// 				 alert(1)
//        		this.$refs.box[5].style.display='none';
				let touches = e.touches[0];
				//记录落点
    			this.pageX = touches.pageX;
		 	},
		 	touchMove(e){
		 		let touches = e.touches[0];
    			let X = touches.pageX - this.pageX;
    			this.flag=X<0;
    		 	let container=this.$refs.container;
    		 	let index=e.target.attributes.order.value;
    		 	var width=index*this.$el.parentNode.clientWidth;
 		 		container.style.webkitTransform='translate3d('+(X-width)+'px, 0, 0)';
		 	},
		 	touchEnd(e){
		 		debugger
		 		let container=this.$refs.container;
		 		let index=e.target.attributes.order.value;
		 		index=this.flag?(-index-1):(-index+1);
		 		let len =e.target.attributes.len.value;
		 	 	if(index>0){
		 	 		index=0;
		 	 	}
		 	 	if(index<-len+1){
		 	 		index=-len+1;
		 	 	}
		 		container.style.webkitTransform='translate3d('+index*100+'%, 0, 0)';
		 		container.style.webkitTransition='300ms';
		 		container.style.transition='300ms';
		 	}
		 },
		 mounted:function(){
		 	let len=this.$refs.box.length;
		 	let i=0;
		 	for(i=0;i<len;i++){
		 		this.$refs.box[i].style.left=(i*100)+'%';
		 	}
		 	 
		 }
	}
</script>

<style>
	.flow-box{
		height:80%;
		width:100%;
		overflow: hidden;
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