import React, { Component } from 'react';
import { connect} from 'react-redux';
import { createStream} from '../../actions';
import StreamForm from './streamForm';

export class streamCreate extends Component {
  submit = (formValue) => {
    this.props.createStream(formValue);
  }

  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default connect(null,{createStream})(streamCreate);