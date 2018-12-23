import _ from 'lodash';
import React, { Component } from 'react';
import { connect} from 'react-redux';
import { getStream, editStream} from '../../actions';
import StreamForm from './streamForm';

export class streamEdit extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  onSubmit = form => {
    this.props.editStream(this.props.match.params.id, form);
  }

  render() {
    if(!this.props.stream){
      return <div>Loadingt...</div>
    }
    
    // inittialValues > auto add value to Field(name).
    return (
      <div>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, 'title', 'description')}
        />
      </div>
    )
  }
}

const mapStatetoProps = (state, thisProps) => {
  return { stream: state.streams[thisProps.match.params.id] };
}

export default connect(mapStatetoProps, {getStream, editStream})(streamEdit);
