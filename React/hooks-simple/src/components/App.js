import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState('posts');

  const onClickFunction = () => {
    if(resource !== 'users'){
      return <ResourceList resource={resource}/>;
    }

    return <UserList resource={resource}/>;
  };

  return (
    <div className="ui container">
      <div>
        <button onClick={()=>setResource('posts')}>Posts</button>
        <button onClick={()=>setResource('todos')}>Todos</button>
        <button onClick={()=>setResource('users')}>Users</button>
      </div>
      {onClickFunction()}
    </div>
  );
};

export default App;
