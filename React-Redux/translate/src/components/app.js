import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelecter from './LanguageSelecter';

export class app extends Component {
  state ={lang:'en'}

  selectLanguage(lang) {
    this.setState({lang:lang});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop:'2rem'}}>
        <LanguageSelecter selectLanguage={this.selectLanguage.bind(this)}/>
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
