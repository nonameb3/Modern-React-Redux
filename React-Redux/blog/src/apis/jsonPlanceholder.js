import Axios from 'axios';

// JsonPlanceHolder API
export default Axios.create({
  baseURL : 'https://jsonplaceholder.typicode.com'
});