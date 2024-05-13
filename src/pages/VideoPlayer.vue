<template>
	<Header :addBtnHandler="addVideo" :backToHome="returnHome" />
	<section class="pt-6 pb-20 min-h-[calc(100vh_-_157px)]" v-if="loadDtl == 'home'">
		<div class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
			<SingleVideo v-for="video in videos" :key="video.id" :compNameHandler="getCompName" :video="video" />
		</div>
	</section>
	<Player v-if="loadDtl == 'player'" />
	<AddVideo v-if="loadDtl == 'addVideo'" />
	<Footer />
</template>

<script>
	import AddVideo from '../components/AddVideo.vue';
	import Footer from '../components/Footer.vue';
	import Header from '../components/Header.vue';
	import Player from '../components/Player.vue';
	import SingleVideo from '../components/SingleVideo.vue';
	import { getVideos } from '../service/videoApi.js';

	export default {
		name: 'Video Player',
		components: {
			AddVideo,
			Footer,
			Header,
			Player,
			SingleVideo
		},
		data() {
			return {
				loadDtl: 'home',
				videos: []
			};
		},

		mounted() {
			this.getVideoList();
		},

		methods: {
			async getVideoList() {
				const res = await getVideos();
				console.log(res);
				this.videos = res;
			},
			addVideo(val) {
				this.loadDtl = val;
			},
			returnHome(val) {
				this.loadDtl = val;
			},
			getCompName(val) {
				this.loadDtl = val;
			}
		}
	};
</script>
