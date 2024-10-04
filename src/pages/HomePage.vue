<script setup>
    import Footer from '../components/footer/Footer.vue';
    import Navbar from '../components/navbar/Navbar.vue';
    import Tags from '../components/tags/Tags.vue';
</script>

<template>
    <Navbar />
    <Tags v-if="$route.name == 'home'" />
    <router-view></router-view>
    <Footer />
</template>
