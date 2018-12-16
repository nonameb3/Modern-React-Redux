import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './googleAuth';
export class header extends Component {
  render() {
    return (
      <div className="ui pointing menu">
        <Link to="/" className="item">Streams</Link>
        <div className="right menu">
          <Link to="/" className="ui item">All Streams</Link>
          <GoogleAuth/>
        </div>
      </div>
    )
  }
}

export default header
