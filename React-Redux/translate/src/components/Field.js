import React, { Component } from 'react';

export class Field extends Component {
  render() {
    return (
      <div className="ui field">
        <lebel>Name : </lebel>
        <input type="text"/>
      </div>
    );
  }
}

export default Field;
