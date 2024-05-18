import axios from 'axios';

//get video list
export const getVideos = async ({search, tags}) => {
    let queryString = "";
    console.log(search)
    if(tags && tags?.length > 0){
        
        queryString += await tags.map(tag => 
            `tags_like=${tag.title}`
        ).join('&');
    }
    
    if(search !== ''){
        queryString += `&q=${search.toLowerCase()}`;
    }
    const res = await axios.get(`https://json-server-sigma-eight.vercel.app/api/videos/?${queryString}`);

    return res.data;
}
//get tag list
export const getTags = async () => {
    const res = await axios.get(`https://json-server-sigma-eight.vercel.app/api/tags`);

    return res.data;
}

//get single video
export const getSingleVideo = async (id) => {
    const res = await axios.get(`https://json-server-sigma-eight.vercel.app/api/videos/${id}`);
    return res.data;
}
//create video
export const createVideo = async (data) => {
    const res = await axios.post(`https://json-server-sigma-eight.vercel.app/api/videos`, data);
    return res.data;
}