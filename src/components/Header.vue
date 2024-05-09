<script setup>
	defineProps({
		addBtnHandler: Function,
		backToHome: Function
	});
</script>

<template>
	<nav class="bg-slate-100 shadow-md">
		<div class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
			<a @click="backToHome('home')">
				<img class="h-10" src="../assets/vue.svg" alt="Learn with Sumit" />
			</a>
			<a
				class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500 hover:cursor-pointer"
				@click="addBtnHandler('addVideo')">
				+ Add Video
			</a>
		</div>
	</nav>
</template>
