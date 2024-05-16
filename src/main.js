import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import './style.css';

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
