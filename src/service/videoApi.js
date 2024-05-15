import axios from 'axios';

//get video list
export const getVideos = async (search, tags) => {
    let queryString = "";
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