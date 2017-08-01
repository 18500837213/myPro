<template>
 	<div class="flow-box">
 		<div class="flow" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" ref="container">
 			<div class="box" v-for="(item,index) in list" ref="box" :order="index" :len="list.length">
 				{{item}}
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
				let touches = e.touches[0];
				//记录落点
    			this.pageX = touches.pageX;
		 	},
		 	touchMove(e){
		 		let touches = e.touches[0];
		 		let clientWidth=this.$el.parentNode.clientWidth;
    			let X = touches.pageX - this.pageX;
    			if(Math.abs(X)<clientWidth/3){
    				this.flag=0
    			}else{
    				this.flag=X<0?-1:1;
    			}
    		 	let container=this.$refs.container;
    		 	let index=e.target.attributes.order.value;
    		 	let width=index*clientWidth;
 		 		container.style.webkitTransform='translate3d('+(X-width)+'px, 0, 0)';
 		 		container.style.removeProperty("webkitTransition");
 		 		container.style.removeProperty("transition");
		 	},
		 	touchEnd(e){
		 		let container=this.$refs.container;
		 		let index=e.target.attributes.order.value;
		 		index=-index+this.flag;
		 		
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
		height:100%;
		width:100%;
		overflow: hidden;
	}
	.flow-box>.flow{
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
</style>