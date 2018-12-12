import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component{
  // constructor(porps){
  //   super(porps);
  //   this.state = {lat:null,errorMessage:null};
  // }
  state ={lat:null,errorMessage:null}
  
  // auto call went app start
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (value)=>{
        this.setState({lat:value.coords.latitude});
      },
      (err)=>{
        this.setState({errorMessage:err.message});
      }
    );
  }
  
  renderContent(){
    if(!this.state.lat && this.state.errorMessage){
      return <div>{this.state.errorMessage}</div>;
    } else if(this.state.lat && !this.state.message){
      return <SeasonDisplay lat={this.state.lat}/>;
    } else{
      return <Loader message="Please accept location request." /> ;
    }
  }
  
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

