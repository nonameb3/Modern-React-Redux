import React, { Component } from 'react';
import { connect} from 'react-redux';
import { getStream, listStreams} from '../../actions';

export class streamEdit extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  render() {
    if(!this.props.stream){
      return <div>Loading Edit...</div>
    }
    
    return (
      <div>
        {this.props.stream.title}
      </div>
    )
  }
}

const mapStatetoProps = (state, thisProps) => {
  return { stream: state.streams[thisProps.match.params.id] };
}

export default connect(mapStatetoProps, {getStream,listStreams})(streamEdit);
