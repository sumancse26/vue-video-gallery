<template>
	<div class="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
		<div class="w-full flex flex-col" @click="compNameHandler('player')">
			<div class="relative">
				<a>
					<img :src="videoInfo.thumbnail" class="w-full h-auto" alt="Some video title" />
				</a>

				<p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
					{{ videoInfo.duration || 0 }}
				</p>
			</div>

			<div class="flex flex-row mt-2 gap-2">
				<a class="shrink-0">
					<img :src="videoInfo.avatar" class="rounded-full h-6 w-6" alt="Learn with Youtube" />
				</a>

				<div class="flex flex-col">
					<a>
						<p class="text-slate-900 text-sm font-semibold">{{ videoInfo.title || '' }}</p>
					</a>
					<a class="text-gray-400 text-xs mt-2 hover:text-gray-600" href="#"> {{ videoInfo.author || '' }}</a>
					<p class="text-gray-400 text-xs mt-1">
						{{ videoInfo.views || 0 }} views . {{ videoInfo.date || '' }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'video',
		props: {
			compNameHandler: Function,
			video: Object
		},
		data() {
			return {
				videoInfo: this.video
			};
		}
	};
</script>
