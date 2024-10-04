<script setup>
    import { createVideo } from '../../service/videoApi.js';
    import { ref } from 'vue';

    const videoInfo = ref({
        title: null,
        description: null,
        author: null,
        avatar: null,
        date: null,
        duration: null,
        views: null,
        link: null,
        thumbnail: null
    });

    const formHandler = async (e) => {
        e.preventDefault();
        await createVideo(videoInfo.value);
    };
</script>

<template>
    <section class="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
        <div class="max-w-7xl mx-auto px-5 lg:px-0">
            <div class="w-full">
                <div class="px-4 sm:px-0 pb-4">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Add new video</h3>
                    <p class="mt-1 text-sm text-gray-600">Please fill up the form to add new video</p>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form @submit="formHandler">
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                                        <input
                                            v-model.trim="videoInfo.title"
                                            type="text"
                                            name="title"
                                            id="title"
                                            autocomplete="title"
                                            class="mt-1 shadow-sm outline-none px-1 focus:ring-cyan-500 focus:border-2 focus:border-cyan-500 w-full sm:text-sm border border-gray-300 rounded-md h-[35px]" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="author" class="block text-sm font-medium text-gray-700"
                                            >Author</label
                                        >
                                        <input
                                            v-model.trim="videoInfo.author"
                                            type="text"
                                            name="author"
                                            id="author"
                                            autocomplete="family-name"
                                            class="mt-1 shadow-sm outline-none px-1 focus:ring-cyan-500 focus:border-2 focus:border-cyan-500 block w-full sm:text-sm border border-gray-300 rounded-md h-[35px]" />
                                    </div>

                                    <div class="col-span-6">
                                        <label for="description" class="block text-sm font-medium text-gray-700">
                                            Description
                                        </label>
                                        <div class="mt-1">
                                            <textarea
                                                v-model.trim="videoInfo.description"
                                                id="description"
                                                name="description"
                                                rows="3"
                                                class="shadow-sm outline-none p-1 focus:ring-cyan-500 focus:border-2 focus:border-cyan-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
                                        </div>
                                        <p class="mt-2 text-sm text-gray-500">Brief description for your video</p>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="video-link" class="block text-sm font-medium text-gray-700"
                                            >YouTube Video Link</label
                                        >
                                        <input
                                            v-model.trim="videoInfo.link"
                                            type="text"
                                            name="video-link"
                                            id="video-link"
                                            autocomplete="email"
                                            class="mt-1 shadow-sm outline-none px-1 focus:ring-cyan-500 focus:border-2 focus:border-cyan-500 block w-full sm:text-sm border border-gray-300 rounded-md h-[35px]" />
                                    </div>

                                    <div class="col-span-6">
                                        <label for="thumbnail-link" class="block text-sm font-medium text-gray-700"
                                            >Thumbnail link</label
                                        >
                                        <input
                                            v-model.trim="videoInfo.thumbnail"
                                            type="text"
                                            name="thumbnail-link"
                                            id="thumbnail-link"
                                            autocomplete="thumbnail-link"
                                            class="mt-1 shadow-sm outline-none px-1 focus:ring-cyan-500 focus:border-2 focus:border-cyan-500 block w-full sm:text-sm border border-gray-300 rounded-md h-[35px]" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
                                        <input
                                            v-model.trim="videoInfo.date"
                                            type="text"
                                            name="date"
                                            id="date"
                                            autocomplete="address-level2"
                                            class="mt-1 shadow-sm outline-none px-1 focus:ring-cyan-500 focus:border-2 focus:border-cyan-500 block w-full sm:text-sm border border-gray-300 rounded-md h-[35px]" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="duration" class="block text-sm font-medium text-gray-700"
                                            >Duration</label
                                        >
                                        <input
                                            v-model.trim="videoInfo.duration"
                                            type="text"
                                            name="duration"
                                            id="duration"
                                            autocomplete="address-level1"
                                            class="mt-1 shadow-sm outline-none px-1 focus:ring-cyan-500 focus:border-2 focus:border-cyan-500 block w-full sm:text-sm border border-gray-300 rounded-md h-[35px]" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="views" class="block text-sm font-medium text-gray-700">Views</label>
                                        <input
                                            v-model.trim="videoInfo.views"
                                            type="text"
                                            name="views"
                                            id="views"
                                            autocomplete="views"
                                            class="mt-1 shadow-sm outline-none px-1 focus:ring-cyan-500 focus:border-2 focus:border-cyan-500 block w-full sm:text-sm border border-gray-300 rounded-md h-[35px]" />
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<!-- <script>
	import { createVideo } from '../../service/videoApi.js';
	export default {
		name: 'Add video',
		data() {
			return {
				videoInfo: {
					title: null,
					description: null,
					author: null,
					avatar: null,
					date: null,
					duration: null,
					views: null,
					link: null,
					thumbnail: null
				}
			};
		},

		methods: {
			async formHandler(e) {
				e.preventDefault();
				await createVideo(this.videoInfo);
			}
		}
	};
</script> -->
