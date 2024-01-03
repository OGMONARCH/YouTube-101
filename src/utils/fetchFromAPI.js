import axios from "axios"

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions';

const options = {
    url: URL_ORIGIN,
    params: {
      part: 'snippet',
      videoId: 'M7FIvfx5J10'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

/baseUrl/

export const fetchFromAPI = async(url) =>{
    await axios.get(`${BASE_URL}/${url}`)
} 