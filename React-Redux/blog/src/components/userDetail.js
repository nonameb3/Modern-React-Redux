import React from 'react';
import { connect } from 'react-redux';

class UserDetail extends React.Component{
  render(){
    const user = this.props.user
    if(!user) return null;
    return (
    <div className="header">
      {user.name}
    </div>
    );
  };
}

const MapStatetoProps = (State, ThisProps) => {
  return {user: State.users.find(user => user.id === ThisProps.userId) };
}

export default connect(MapStatetoProps)(UserDetail);