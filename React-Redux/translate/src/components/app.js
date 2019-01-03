import React, { Component } from 'react';
import UserCreate from './UserCreate';

export class app extends Component {
  state ={lang:'en'}

  selectLanguage = lang => {
    this.setState({lang:lang});
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language : 
          <i className="flag us" onClick={()=>this.selectLanguage('en')}/>
          <i className="flag th" onClick={()=>this.selectLanguage('th')}/>
        </div>
        <UserCreate/>
      </div>
    );
  }
}

export default app;
