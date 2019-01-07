import React from 'react';
import UseResource from './UseResource';

const UserList = ({resource}) => {
  const users = UseResource(resource);

  return(
    <div>
      {users.map( user => <li key={user.id}>{user.name}</li>)}
    </div>
  );
};

export default UserList;