<script setup>
	import { ref } from 'vue';
	import AddVideo from '../components/AddVideo.vue';
	import Footer from '../components/Footer.vue';
	import Header from '../components/Header.vue';
	import Player from '../components/Player.vue';
	import SingleVideo from '../components/SingleVideo.vue';

	//data section
	const loadDtl = ref('home');

	//event from header component
	const addVideo = (val) => {
		loadDtl.value = val;
	};

	const returnHome = (val) => {
		loadDtl.value = val;
	};

	//event from single video component
	const getVideoInfo = (val) => {
		loadDtl.value = val;
	};
</script>

<template>
	<Header :addBtnHandler="addVideo" :backToHome="returnHome" />
	<section class="pt-6 pb-20 min-h-[calc(100vh_-_157px)]" v-if="loadDtl == 'home'">
		<div class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
			<SingleVideo :singleVideoHandler="getVideoInfo" />
		</div>
	</section>
	<Player v-if="loadDtl == 'player'" />
	<AddVideo v-if="loadDtl == 'addVideo'" />
	<Footer />
</template>
