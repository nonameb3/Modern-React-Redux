import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

// use Consumer
export class Button extends Component {
  renderButtonName(value){
    return value === 'en' ? 'Submit' : 'ตกลง';
  }

  renderButton(value){
    return(
      <button className={`ui button ${value}`}>
        <LanguageContext.Consumer>
          {(val)=>this.renderButtonName(val)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <div>
        <ColorContext.Consumer>
          {(colorVal)=>this.renderButton(colorVal)}
        </ColorContext.Consumer>
      </div>
    );
  }
}

export default Button;
