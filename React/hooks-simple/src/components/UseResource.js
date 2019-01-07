import {useState, useEffect} from 'react';
import axios from 'axios';

// use useState, useEddect Hooks
const UseResource = resource => {
  // set state
  const [resources, setResource] = useState([]);

  const fectResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResource(response.data);
  };

  // same as componentDidMount , Update
  useEffect(
    ()=>{
      fectResource(resource);
    },[resource] // only run when userId changed
  );

  return resources;
};

export default UseResource;