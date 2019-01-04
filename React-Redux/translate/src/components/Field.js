import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

// use context
export class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'en'? 'Name' : 'ซื่อ';

    return (
      <div className="ui field">
        <label>{`${text} :`}</label>
        <input type="text"/>
      </div>
    );
  }
}

export default Field;
