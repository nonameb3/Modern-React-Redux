import React, { Component } from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelecter from './LanguageSelecter';

export class app extends Component {
  render() {
    return (
      <div className="ui container" style={{marginTop:'2rem'}}>
        <LanguageStore>
          <LanguageSelecter/>
          <ColorContext.Provider value="red">
              <UserCreate/>
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default app;
