<template>
 	<div class="flow-box">
 		<div class="flow" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" ref="container">
 			<div class="box" v-for="(item,index) in list" ref="box" :order="index" :len="list.length">
 				<div v-if="item.type==0" class="type0" :order="index" :len="list.length">
 					<img :src="item.icon" class="book-icon"/>
 					<p></p>
 					<div class="title">{{item.title}}</div>
 					<p></p>
 					<div>水水</div>
 					<div class="bottom-item">
 						<img :src="item.header" class="header-icon">
 						<p></p>
 						陈冬冬在读
 					 	<p></p>
 						<img src="../images/icons/user.svg" class="icon-person"/>31 
 					</div>
 					
 				</div>
 			</div>
 		</div>
 	</div>
</template>

<script>
	import header1 from '@/images/headers/header001.jpg'
	import header2 from '@/images/headers/header002.jpg'
	import header3 from '@/images/headers/header003.jpg'
	import header4 from '@/images/headers/header004.jpg'
	import book1 from '@/images/books/book002.jpg'
	import book2 from '@/images/books/book003.jpg'
	export default {
		data:function(){
			return {
				list:[{
					type:0,
					icon:book1,
					title:"十万个为什么",
					header:header1
				},{
					type:0,icon:book2,
					title:"十亿个为什么",
					header:header2
				},{
					type:0,
					icon:book1,
					title:"十万个为什么",
					header:header2
				},{
					type:0,icon:book1,title:"十万个为什么",header:header3
				},{
					type:0,icon:book1,title:"十万个为什么",header:header2
				},{
					type:0,icon:book1,title:"十万个为什么",header:header3
				}]
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
	.flow-box .box{
		position:absolute;
        z-index:1;
        top:0;
        left:0;
        width:100%;
        height:100%;
        padding-top: 10%;
       /* overflow:hidden;*/
	}
	.flow-box .box p{
		height:1rem;
	}
	.flow-box .box .title{
		font-size: 1.5rem;
	}
	.flow-box .book-icon{
		height: 10rem;
	}
	.flow-box .header-icon{
		height: 3rem;
		border-radius: 100%;
	}
	.flow-box .icon-person{
		height: 1rem;
	}
	.flow-box .bottom-item{
		margin-top: 20%;
	}
</style>