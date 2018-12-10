import Axios from 'axios';

// youtube api key
const Key = process.env.YOUTUBEAPI;

const Api = Axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    maxResults: 5,
    part: 'snippet',
    key:Key
  }
});

export default Api;