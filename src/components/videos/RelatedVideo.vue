<template>
	<div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
		<div
			class="w-full flex flex-row gap-2 mb-4"
			v-for="(relVid, index) in relatedVideos"
			:key="index"
			@click="relatedVideoItem(relVid)">
			<div class="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
				<a>
					<img :src="relVid.thumbnail" class="object-cover" alt="Some video title" />
				</a>
				<p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
					{{ relVid.duration || 0 }}
				</p>
			</div>

			<div class="flex flex-col w-full">
				<a>
					<p class="text-slate-900 text-sm font-semibold">{{ relVid.title }}</p>
				</a>
				<a class="text-gray-400 text-xs mt-2 hover:text-gray-600"> {{ relVid.author }} </a>
				<p class="text-gray-400 text-xs mt-1">{{ relVid.views }} views . {{ relVid.date }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'pinia';
	import { videoStore } from '../../store/videoStore';
	export default {
		name: 'Related Video',
		props: {
			relatedVideoItem: Object
		},

		data() {
			return {};
		},
		computed: {
			...mapState(videoStore, {
				relatedVideos: (state) => state.videos
			})
		}
	};
</script>
