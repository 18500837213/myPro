<template>
	<div>
		<setting-header></setting-header>
		<div class=container-setting>
			<setting></setting>
		</div>
	</div>
</template>

<script>
	import setting from '@/components/Setting'
	import settingHeader from '@/components/SettingHeader'
	export default {
		components: {
			'settingHeader': settingHeader,
			'setting': setting
		}
	}
</script>

<style>
	.container-setting {
		width: 100%;
		overflow-y: scroll;
		position: absolute;
		z-index: 10;
		top: 5rem;
		bottom: 4rem;
		_height: 100%
	}
</style>