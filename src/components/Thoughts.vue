<template>
	<div class="thoughts" >
		<div class="tho" v-for="tho in thoughts">
				<img :src="tho.icon" />
			 	{{tho.name}}<br/>{{tho.position}} 
			<div class="tho-content">
				<div class="tho-block">
					{{tho.comment}}
					<div class="tho-book">
						<img :src="tho.bookIcon"/>
						{{tho.bookName}}  
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
	 
	export default{
		data:function(){
			return {
				thoughts:[{
					name:"柠檬汽水",
					icon:header1,
					bookIcon:book1,
					position:" ",
					bookName:"追风筝的人",
					comment:"两年前，我在美国上一门英语课。坐在我旁边的男孩就来自阿富汗。当他用英语说出这个名字的时候，我们都以为他穿过重重战火和历史的沉疴而来，身上闪耀着神圣的荣光。而他，只是一个普通的阿富汗男孩，好像天空下奔跑着追风筝的人。 "
				},{
					name:'ice',
					icon:header2,
					bookIcon:book2,
					position:" ",
					bookName:"追风筝的人",
					comment:" "
				},{
					name:"石球迷",
					icon:header3,
					bookIcon:book1,
					position:" ",
					bookName:"追风筝的人",
					comment:" "
				},{
					name:"steam",
					icon:header4,
					bookIcon:book1,
					position:" ",
					bookName:"追风筝的人",
					comment:" "
				},{
					name:"柠檬汽水",
					icon:header1,
					bookIcon:book1,
					position:" ",
					bookName:"追风筝的人",
					comment:" "
				},{
					name:'ice',
					icon:header2,
					position:" ",
					bookIcon:book1,
					bookName:"追风筝的人",
					comment:" "
				},{
					name:"石球迷",
					icon:header3,
					position:" ",
					bookIcon:book1,
					bookName:"追风筝的人",
					comment:" "
				}]
			}
		},
	}
</script>

<style>
	.thoughts{
		background:#C8C8C8;
		text-align: left;
	}
	.thoughts .tho{
		height:20rem;
		width:100%;
		padding-left:0.5rem;
		padding-top:0.5rem;
		background: white;
		border-bottom: solid 1rem #CDCDCD;
		line-height: 1rem;
	}
	.thoughts .tho>img{
		height:3rem;
		border-radius:100%;
		border:solid thin #C8C8C8;
		float: left;
	}
	.thoughts .tho-content{
		height: 15rem;
		position:relative;
	}
	.thoughts .tho-block{
		border:solid thin #C8C8C8;
		margin:3rem 1rem auto 3.5rem;
		max-height: 10rem;
		padding:1rem;
		position: absolute;
	}
	.thoughts .tho-book{
		border-top: solid 1px #C8C8C8;
		 
	}
	.tho-book img{
		width:2rem;
		height:2rem;
		vertical-align: middle;
	}
</style>