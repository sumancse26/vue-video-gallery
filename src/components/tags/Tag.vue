<template>
	<div
		class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
		:class="{ 'bg-blue-600 text-white': active }"
		@click="active = !active">
		{{ tag.title || '' }}
	</div>
</template>

<script>
	export default {
		name: 'Tag',
		props: {
			tagInfo: Object
		},

		data() {
			return {
				tag: this.tagInfo || {},
				active: false
			};
		}
	};
</script>
