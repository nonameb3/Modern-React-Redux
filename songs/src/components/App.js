import React from 'react';
import SongList from './songList';

class App extends React.Component{
  render(){
    return(
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList/>
          </div>
        </div>
      </div>  
    );
  }
}

export default App;