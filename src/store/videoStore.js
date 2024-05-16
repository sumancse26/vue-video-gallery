import { defineStore } from "pinia";
import { getVideos } from "../service/videoApi.js";
export const videoStore = defineStore('videoGallery', {
    state: () => ({
        videos: [],
        search: '',
        tags: []
    }),

    actions: {
        async getVideoList(search='', tags=[]) {
            try {
                this.search = search,
                this.tags = tags
                const params = {
                    search: this.search,
                    tags: this.tags
                }
                const res = await getVideos(params);
                this.videos =  res;
            } catch (e) {
                this.videos = [];
                return e;
            }
        }
    },
})