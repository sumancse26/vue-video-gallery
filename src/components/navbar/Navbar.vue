<template>
	<nav className="bg-slate-100 shadow-md">
		<div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
			<router-link to="/">
				<img className="h-12 w-12 rounded-full" src="../../assets/vue.svg" alt="Learn Yourself" />
			</router-link>
			<div class="flex items-center justify-between gap-5">
				<div
					className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
					<input
						className="outline-none border-none mr-2"
						type="search"
						name="search"
						placeholder="Search"
						v-model.trim="searchKey"
						@change.enter="searchHandler" />
					<img className="inline h-4 cursor-pointer" src="../../assets/search.svg" alt="Search" />
				</div>
				<a
					class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500 hover:cursor-pointer"
					@click="addBtnHandler('addVideo')">
					+ Add Video
				</a>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'Navbar',
		props: {
			addBtnHandler: Function,
			backToHome: Function,
			getSearchKey: Function
		},
		data() {
			return {
				searchKey: ''
			};
		},

		methods: {
			searchHandler() {
				this.getSearchKey(this.searchKey);
			}
		}
	};
</script>
