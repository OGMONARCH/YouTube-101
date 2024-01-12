import axios from "axios"


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
 
  // const options = {
  //  
  //   url: 'https://youtube-v31.p.rapidapi.com/videos',
  //   params: {
  //     part: 'contentDetails,snippet,statistics',
  //     id: '7ghhRHRP6t4'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': '0174947569msh6951f6a8472563ap1f4170jsn836b323d0aa4',
  //     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  //   }
  // };  


export const fetchFromAPI = async(url) =>{
  const { data } =  await axios.get(`${BASE_URL}/${url}`, options);

  return data;
} 