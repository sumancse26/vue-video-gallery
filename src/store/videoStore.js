import { defineStore } from 'pinia';
import { getVideos } from '../service/videoApi.js';
export const videoStore = defineStore('videoGallery', {
    state: () => ({
        videos: [],
        search: '',
        tags: []
    }),

    actions: {
        async getVideoList(data, type) {
            try {
                if (type === 'search') {
                    this.search = data;
                } else if (type === 'tags') {
                    this.tags = data;
                } else {
                    this.search = '';
                    this.tags = [];
                }

                const params = {
                    search: this.search,
                    tags: this.tags
                };
                const res = await getVideos(params);
                this.videos = res;
            } catch (e) {
                this.videos = [];
                return e;
            }
        }
    }
});
