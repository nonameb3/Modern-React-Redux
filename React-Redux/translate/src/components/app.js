import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export class app extends Component {
  state ={lang:'en'}

  selectLanguage(lang) {
    this.setState({lang:lang});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop:'2rem'}}>
        <div>
          Select a language : 
          <i className="flag us" onClick={()=>this.selectLanguage('en')}/>
          <i className="flag th" onClick={()=>this.selectLanguage('th')}/>
        </div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.lang}>
            <UserCreate/>
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default app;
