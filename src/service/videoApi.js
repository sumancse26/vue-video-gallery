import axios from 'axios';

//get video list
export const getVideos = async () => {
    const res = await axios.get(`https://json-server-sigma-eight.vercel.app/videos`);

    return res.data;
}
//get tag list
export const getTags = async () => {
    const res = await axios.get(`https://json-server-sigma-eight.vercel.app/tags`);

    return res.data;
}