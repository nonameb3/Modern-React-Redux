import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignIn, SignOut} from '../actions';

export class GoogleAuth extends Component {
  state ={isSignedIn : null};

  componentDidMount() {
    window.gapi.load('client:auth2',() => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_KEY,
        scope:'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn){
      this.props.SignIn(this.auth.currentUser.get().getId());
    }else{
      this.props.SignOut();
    };
  }

  onSignInClick = () =>{
    this.auth.signOut();
  }

  onSignOutClick = () => {
    this.auth.signIn();
  }

  // Button render
  renderAuthButton = () => {
    if (this.props.isSignedIn === null){
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
  } else{   
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const MapStatetoProps = state => {
  return { isSignedIn : state.auth.isSignIn };
}
export default connect(MapStatetoProps, {SignIn, SignOut})(GoogleAuth)
