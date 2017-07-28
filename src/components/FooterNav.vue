<template>
	<div class="footer-nav">
		<div v-for="(item,index) in items" :class="[commonClass,item.active ? activeClass : '']" v-on:click="navClickEvent(items,index)">
			<span class="nav-txt" >
				<img :src="item.active?item.src_active:item.src_grey" /><br/>
				{{item.text}}
			</span>
		</div>
	</div>
</template>

<script>
	import discoveryBlue from '@/images/discovery_blue.png'
	import discoveryGrey from '@/images/discovery_grey.png'
	import bookshelfBlue from '@/images/bookshelf_blue.png'
	import bookshelfGrey from '@/images/bookshelf-grey.png'
	import compassBlue from '@/images/compass_blue.png'
	import compassGrey from '@/images/compass_grey.png'
	import dialogBlue from '@/images/dialog_blue.png'
	import dialogGrey from '@/images/dialog_grey.png'
	import mineBlue from '@/images/mine_blue.png'
	import mineGrey from '@/images/mine_grey.png'
 
	export default{
		data:function(){
			return {
				commonClass:'nav-item',
        		activeClass:'active',
				items:[{
					text:'发现',
					src_active:compassBlue,
					src_grey:compassGrey,
					active:true
				},{
					text:'书架',
					src_active:bookshelfBlue,
					src_grey:bookshelfGrey,
					active:false
				},{
					text:'想法',
					src_active:dialogBlue,
					src_grey:dialogGrey,
					active:false
				},{
					text:'个人',
					src_active:mineBlue,
					src_grey:mineGrey,
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
	img{
		 height: 3rem;
		
	}
	.footer-nav{
		width:100%;
		display: flex;
		position:fixed; 
		bottom:0;
		box-shadow: 1px 1px 10px #888888;
	}
	.nav-item{
		 display:inline-block;
		 flex:1;
		 color:#cdcdcd;
		 padding:5px;
	}
	.active{
		 color:#1296db;
	}
</style>