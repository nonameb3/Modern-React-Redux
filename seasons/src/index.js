import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
  constructor(porps){
    super(porps);
    this.state = {lat:null,errorMessage:null};
    
    window.navigator.geolocation.getCurrentPosition(
      (value)=>{
        this.setState({lat:value.coords.latitude});
      },
      (err)=>{
        this.setState({errorMessage:err.message});
      }
    );
  }
  
  render() {
    if(!this.state.lat && this.state.errorMessage){
      return <div>{this.state.errorMessage}</div>;
    } else if(this.state.lat && !this.state.message){
      return <SeasonDisplay/>;
    } else{
      return <div>Loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

