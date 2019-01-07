import {useState, useEffect} from 'react';

const UseLocation = () => {
  // set State
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // use Effect for componentDidMount
  useEffect(
    ()=>{
      window.navigator.geolocation.getCurrentPosition(
        (value)=>{
          setLat(value.coords.latitude);
        },
        (err)=>{
          setErrorMessage(err.message);
        }
      );
    },[]
  );

  return {lat, errorMessage};
};

export default UseLocation;