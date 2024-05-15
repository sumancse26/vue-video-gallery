import VideoPlayer from '../components/player/Player.vue';
import Home from '../components/videos/Videos.vue';

const routes = [
    {path: '/', name: 'home',component: Home},
    {path: '/videos/:id', name: 'video-player',component: VideoPlayer},
]


export default routes;