import addVideo from '../components/addvideo/AddVideo.vue';
import VideoPlayer from '../components/player/Player.vue';
import Home from '../components/videos/Videos.vue';

const routes = [
    {path: '/', name: 'home',component: Home},
    {path: '/videos/:id', name: 'video-player',component: VideoPlayer},
    {path: '/add-video', name: 'add-video',component: addVideo},
]


export default routes;