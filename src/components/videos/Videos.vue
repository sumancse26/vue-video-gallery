<template>
	<section class="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
		<div class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
			<SingleVideo
				v-for="videoItem in videos"
				:key="videoItem.id"
				:compNameHandler="getCompName"
				:video="videoItem" />
		</div>
	</section>
</template>

<script>
	import { getVideos } from '../../service/videoApi.js';
	import SingleVideo from './SingleVideo.vue';
	export default {
		name: 'Video Component',
		components: {
			SingleVideo
		},
		data() {
			return {
				videos: [],
				tags: [],
				search: ''
			};
		},
		mounted() {
			this.getVideoList();
		},
		methods: {
			async getVideoList() {
				try {
					const res = await getVideos(this.search, this.tags);
					this.videos = res;
				} catch (e) {
					this.videos = [];
					return e;
				}
			}
		}
	};
</script>
