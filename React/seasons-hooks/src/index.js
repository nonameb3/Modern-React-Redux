import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import UseLocation from './UseLocation';

const App = () => {
  const{lat, errorMessage} = UseLocation();

  // check context
  let context;
  if(!lat && errorMessage){
    context = <div>{errorMessage}</div>;
  } else if(lat && !errorMessage){
    context = <SeasonDisplay lat={lat}/>;
  } else{
    context = <Loader message="Please accept location request." /> ;
  }

  return <div>{context}</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));

