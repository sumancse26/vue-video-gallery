<template>
	<section class="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
		<div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
			<div class="grid grid-cols-3 gap-2 lg:gap-8">
				<div class="col-span-full w-full space-y-8 lg:col-span-2">
					<!-- video player -->
					<iframe
						width="100%"
						class="aspect-video"
						src="https://www.youtube-nocookie.com/embed/6O4s7v28nlw"
						title="Some video title"
						frameborder=""
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen>
					</iframe>

					<!-- video description -->
					<Description />
				</div>
				<RelatedVideo />
			</div>
		</div>
	</section>
</template>

<script>
	import Description from './description/Description.vue';
	import RelatedVideo from './videos/RelatedVideo.vue';
	export default {
		name: 'Player',
		components: {
			RelatedVideo,
			Description
		}
	};
</script>
