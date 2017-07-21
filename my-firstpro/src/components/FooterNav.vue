<template>
	<div class="footer-nav">
		<div v-for="(item,index) in items" :class="[commonClass,item.active ? activeClass : '']" v-on:click="navClickEvent(items,index)">
			<span class="nav-txt" >
				{{item.text}}
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				commonClass:'nav-item',
        		activeClass:'active',
				items:[{
					text:'首页',
					active:true
				},{
					text:'推荐',
					active:false
				},{
					text:'排行榜',
					active:false
				},{
					text:'个人',
					active:false
				}]
			}
		},
		methods:{
			navClickEvent:function(items,index){
				/*默认切换类的动作*/
				items.forEach(function(el){
					el.active = false;
				});
				items[index].active = true;
				/*开放用户自定义的接口*/
				this.$emit('navClickEvent',items,index);
			}
    }
	}
</script>

<style>
	.footer-nav{
		font-size:1.8rem;
		
	}
	.nav-item{
		background:lightgray;
		 float:left;
		 width:24%;
		 border:solid 1px white;
		 padding:5px;
	}
	.active{
		background:forestgreen;
	}
</style>