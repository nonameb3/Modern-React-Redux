import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStream, deleteStream } from '../../actions';
import Modal from '../modal';
import history from '../../history';

export class streamDelete extends Component {
  componentDidMount(){
    this.props.getStream(this.props.match.params.id);
    console.log(this.props);
  }

  action = () => {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button onClick={()=> this.props.deleteStream(id)} className="ui button red">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );
  };

  renderContent = () =>{
    if(!this.props.stream){
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the stream with : ${this.props.stream.title}`;
  }

  render() {
    return (
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          action={this.action()}
          onDismiss={()=>history.push('/')}
        />
    );
  }
}

const mapStatetoProps = (state, thisProps) => {
  return {stream: state.streams[thisProps.match.params.id]};
};

export default connect(mapStatetoProps, {getStream, deleteStream})(streamDelete);
