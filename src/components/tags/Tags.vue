<template>
	<section>
		<div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
			<Tag v-for="(tag, index) in tags" :key="index" :tagInfo="tag" />
		</div>
	</section>
</template>

<script>
	import { getTags } from '../../service/videoApi.js';
	export default {
		data() {
			return {
				tags: []
			};
		},

		mounted() {
			this.tagList();
		},

		methods: {
			async tagList() {
				try {
					const res = await getTags();
					this.tags = res.data || [];
				} catch (e) {
					this.tags = [];
					return e;
				}
			}
		}
	};
</script>
