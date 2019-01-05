import React from 'react';

const Context = React.createContext('en');

export class LanguageStore extends React.Component{
  state = {lang:'en'}

  onLanguageChange(lang) {
    this.setState({ lang });
  }

  render(){
    return(
      <Context.Provider value={{...this.state,onLanguageChange:this.onLanguageChange.bind(this)}}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;