<template>
	<section class="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
		<div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
			<div class="grid grid-cols-3 gap-2 lg:gap-8">
				<div class="col-span-full w-full space-y-8 lg:col-span-2">
					<!-- video player -->
					<iframe
						width="100%"
						class="aspect-video"
						:src="video.link"
						:title="video.title"
						frameborder=""
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen>
					</iframe>

					<!-- video description -->
					<Description :videoInfo="video" />
				</div>
				<RelatedVideo :relatedVideoItem="getRelVideo" />
			</div>
		</div>
	</section>
</template>

<script>
	import { mapActions } from 'pinia';
	import { getSingleVideo } from '../../service/videoApi.js';
	import { videoStore } from '../../store/videoStore';
	import Description from '../description/Description.vue';
	import RelatedVideo from '../videos/RelatedVideo.vue';
	export default {
		name: 'Video Player',
		components: {
			RelatedVideo,
			Description
		},

		data() {
			return {
				video: {}
			};
		},
		async created() {
			await this.singleVideo(this.$route.params.id);
		},
		async updated() {
			const tagList = this.video.tags?.map((tag, id) => {
				return {
					id: id + 1,
					title: tag
				};
			});
			await this.getVideoList(tagList, 'tags');
		},
		methods: {
			...mapActions(videoStore, ['getVideoList']),
			async singleVideo(id) {
				try {
					this.video = {};
					this.video = await getSingleVideo(id);
				} catch (e) {
					this.video = {};
					return e;
				}
			},
			getRelVideo(item) {
				this.singleVideo(item.id);
			}
		}
	};
</script>
