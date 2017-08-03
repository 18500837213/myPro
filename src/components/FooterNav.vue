<template>
	<div class="footer-nav">
		<router-link v-for="(item,index) in items"  :to="item.src" :key="item.id">
			<div :class="[commonClass,item.active ? activeClass : '']" v-on:click="navClickEvent(items,index)">
					<img :src="item.active?item.src_active:item.src_grey" /><br/>
					{{item.text}}
			</div>
		</router-link>
	</div>
</template>

<script>
	import discoveryBlue from '@/images/icons/discovery_blue.png'
	import discoveryGrey from '@/images/icons/discovery_grey.png'
	import bookshelfBlue from '@/images/icons/bookshelf_blue.png'
	import bookshelfGrey from '@/images/icons/bookshelf-grey.png'
	import compassBlue from '@/images/icons/compass_blue.png'
	import compassGrey from '@/images/icons/compass_grey.png'
	import dialogBlue from '@/images/icons/dialog_blue.png'
	import dialogGrey from '@/images/icons/dialog_grey.png'
	import mineBlue from '@/images/icons/mine_blue.png'
	import mineGrey from '@/images/icons/mine_grey.png'

	export default {
		data: function() {
			return {
				commonClass: 'nav-item',
				activeClass: 'active',
				items: [{
					text: '发现',
					id:'bDiscovery',
					src_active: compassBlue,
					src_grey: compassGrey,
					src: '/',
					active: true
				}, {
					text: '书架',
					id:'bShelf',
					src_active: bookshelfBlue,
					src_grey: bookshelfGrey,
					src: '/shelf',
					active: false
				}, {
					text: '想法',
					id:'bThoughts',
					src_active: dialogBlue,
					src_grey: dialogGrey,
					src: '/thoughts',
					active: false
				}, {
					text: '个人',
					id:'bSetting',
					src_active: mineBlue,
					src_grey: mineGrey,
					src: '/setting',
					active: false
				}]
			}
		},
		methods: {
			navClickEvent(items, index) {
				/*默认切换类的动作*/
				items.forEach(function(el) {
					el.active = false;
				});
				items[index].active = true;
				/*开放用户自定义的接口*/
				this.$emit('navClickEvent', items, index);
			}
		}
	}
</script>

<style>
	.footer-nav img {
		height: 2rem;
	}
	
	.footer-nav {
		height:4rem;
    	width:100%;
    	position:absolute;
   		z-index:200;
    	bottom:0;
    	text-align:center;
		display: flex;
		box-shadow: 1px 1px 10px #888888;
		background: white;
		font-size: 0.5rem;
		line-height: 1rem;
	}
	
	.footer-nav a{
		display: inline-block;
		flex: 1;
		color: #cdcdcd;
		text-decoration: none;
	}
	
	.footer-nav .nav-item{
		margin-top: 0.5rem;
		color: #cdcdcd;
	}
	
	.footer-nav .active {
		color: #1296db;
	}

</style>