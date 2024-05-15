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
				<RelatedVideo />
			</div>
		</div>
	</section>
</template>

<script>
	import { getSingleVideo } from '../../service/videoApi.js';
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
		mounted() {
			this.singleVideo(this.$route.params.id);
		},
		methods: {
			async singleVideo(id) {
				try {
					this.video = {};
					this.video = await getSingleVideo(id);
				} catch (e) {
					this.video = {};
					return e;
				}
			}
		}
	};
</script>
