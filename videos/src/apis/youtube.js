import Axios from 'axios';

const Key = 'AIzaSyAcVb0710aElwU4E0U_L43uR6An_Ur3MN8';

const Api = Axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    maxResults: 5,
    part: 'snippet',
    key:Key
  }
});

export default Api;