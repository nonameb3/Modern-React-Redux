import React, { Component } from 'react';
import { getStream } from '../../actions';
import { connect } from 'react-redux';

export class streamShow extends Component {
  componentDidMount(){
    this.props.getStream(this.props.match.params.id);
  }

  render() {
    if(!this.props.stream){
      return <div>Loading...</div>
    }

    const {title, description} = this.props.stream;
    return (
      <div>
        <h1>{title}</h1>
        <h4>{description}</h4>
      </div>
    )
  }
}

const mapStatetoProps = (state, thisProps) => {
  return {stream: state.streams[thisProps.match.params.id]};
}

export default connect(mapStatetoProps,{getStream})(streamShow);
