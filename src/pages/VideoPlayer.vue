<template>
	<Navbar :addBtnHandler="addVideo" :backToHome="returnHome" :getSearchKey="(item) => (search = item)" />
	<Tags :getCheckedTag="(item) => (tags = item)" />
	<section class="pt-6 pb-20 min-h-[calc(100vh_-_157px)]" v-if="loadDtl == 'home'">
		<div class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
			<SingleVideo
				v-for="videoItem in videos"
				:key="videoItem.id"
				:compNameHandler="getCompName"
				:video="videoItem" />
		</div>
	</section>
	<Player v-if="loadDtl == 'player'" />
	<AddVideo v-if="loadDtl == 'addVideo'" />
	<Footer />
</template>

<script>
	import Player from '../components/Player.vue';
	import AddVideo from '../components/addvideo/AddVideo.vue';
	import Footer from '../components/footer/Footer.vue';
	import Navbar from '../components/navbar/Navbar.vue';
	import Tags from '../components/tags/Tags.vue';
	import SingleVideo from '../components/videos/SingleVideo.vue';
	import { getVideos } from '../service/videoApi.js';

	export default {
		name: 'Video Player',
		components: {
			AddVideo,
			Footer,
			Navbar,
			Player,
			SingleVideo,
			Tags
		},
		data() {
			return {
				loadDtl: 'home',
				videos: [],
				tags: [],
				search: ''
			};
		},

		mounted() {
			this.getVideoList();
		},

		methods: {
			async getVideoList() {
				try {
					const res = await getVideos(this.search, this.tags);
					this.videos = res;
				} catch (e) {
					this.videos = [];
					return e;
				}
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
