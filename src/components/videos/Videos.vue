<template>
	<section class="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
		<div class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
			<SingleVideo
				v-for="videoItem in videoList"
				:key="videoItem.id"
				:compNameHandler="getCompName"
				:video="videoItem" />
		</div>
	</section>
</template>

<script>
	import { mapActions, mapState } from 'pinia';
	import { defineComponent } from 'vue';
	import { videoStore } from '../../store/videoStore.js';
	import SingleVideo from './SingleVideo.vue';
	export default defineComponent({
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
		async mounted() {
			await this.getVideoList('', 'initial');
		},
		methods: {
			...mapActions(videoStore, ['getVideoList'])
		},

		computed: {
			...mapState(videoStore, {
				videoList: (state) => state.videos
			})
		}
	});
</script>
