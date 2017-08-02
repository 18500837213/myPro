<template>
	<div class=container-setting>
		<setting-header></setting-header>
		<setting></setting>
	</div>
</template>

<script>
	import setting from '@/components/Setting'
	import settingHeader from '@/components/SettingHeader'
	export default{
		components:{
			'settingHeader':settingHeader,
			'setting':setting
		}
	}
</script>

<style>
</style>