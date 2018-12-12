import Axios from 'axios';

export default Axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{
        Authorization : 'Client-ID 52bfb47f6cdb89df5755bd04b96007893c4184da70e0a9e9d46ff0b3c0d2a990'
      }
});