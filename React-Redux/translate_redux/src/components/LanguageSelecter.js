import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class LanguageSelecter extends Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div>
        Select a language : 
        <i className="flag us" onClick={()=>this.context.onLanguageChange('en')}/>
        <i className="flag th" onClick={()=>this.context.onLanguageChange('th')}/>
      </div>
    );
  }
}

export default LanguageSelecter;
