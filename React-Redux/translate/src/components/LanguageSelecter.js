import React, { Component } from 'react';

export class LanguageSelecter extends Component {
  render() {
    return (
      <div>
        Select a language : 
        <i className="flag us" onClick={()=>this.props.selectLanguage('en')}/>
        <i className="flag th" onClick={()=>this.props.selectLanguage('th')}/>
      </div>
    );
  }
}

export default LanguageSelecter;
