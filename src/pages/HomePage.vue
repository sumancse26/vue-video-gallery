<template>
	<Navbar />
	<Tags :getCheckedTag="(item) => (tags = item)" />
	<router-view></router-view>
	<Footer />
</template>

<script>
	import Navbar from '../components/navbar/Navbar.vue';
	import Tags from '../components/tags/Tags.vue';
	export default {
		name: 'Video Component',
		components: {
			Navbar,
			Tags
		}
	};
</script>
