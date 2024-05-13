<template>
	<div>
		{{ tag.title || '' }}
	</div>
</template>
<!-- :class="{
    'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer': '',
    'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer': ''
}" -->
<script>
	export default {
		name: 'Tag',
		props: {
			tagInfo: Object
		},

		data() {
			return {
				tag: this.tagInfo || {}
			};
		}
	};
</script>
