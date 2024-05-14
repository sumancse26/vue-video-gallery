<template>
	<section>
		<div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
			<div
				v-for="(tag, index) in tags"
				:key="index"
				class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
				:class="{ 'bg-blue-600 text-white': checkedTags.includes(tag) }"
				@click="checkUncheckHandler(tag)">
				{{ tag.title || '' }}
			</div>
		</div>
	</section>
</template>

<script>
	import { getTags } from '../../service/videoApi.js';
	export default {
		name: 'Tags',
		props: {
			getCheckedTag: Function
		},
		data() {
			return {
				tags: [],
				checkedTags: []
			};
		},

		mounted() {
			this.tagList();
		},

		methods: {
			async tagList() {
				try {
					const res = await getTags();
					this.tags = res || [];
				} catch (e) {
					this.tags = [];
					return e;
				}
			},

			checkUncheckHandler(tag) {
				if (!this.checkedTags.includes(tag)) {
					this.checkedTags = [...this.checkedTags, tag];
				} else {
					this.checkedTags = this.checkedTags?.filter((item) => item.id != tag.id);
				}

				this.getCheckedTag(this.checkedTags);
			}
		}
	};
</script>
