import React from 'react';
import { connect } from 'react-redux';
import { fecthUser } from '../actions';

class UserDetail extends React.Component{
  componentDidMount(){
    this.props.fecthUser(this.props.userId);
  }

  render(){
    const user = this.props.users.find((users) => users.id === this.props.userId);
    if(!user) return null;
    return <div>{user.name}</div>;
  }
}

const MapStatetoProps = (State) => {
  return {users : State.users}
}

export default connect(MapStatetoProps,{ fecthUser })(UserDetail);