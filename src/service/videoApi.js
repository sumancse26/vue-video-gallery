import axios from 'axios';

export const getVideos = async () => {
    const res = await axios.get(`https://json-server-sigma-eight.vercel.app/videos`);

    return res.data;
}