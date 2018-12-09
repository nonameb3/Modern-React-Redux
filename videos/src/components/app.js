import React from 'react';
import YoutubeApi from '../apis/youtube';
import SearchBar from './searchBar';
import VideoList from './videoList';

class App extends React.Component{
  state={videos:[]}
  
  onTermSubmit = async (term)=>{
    const respones = await YoutubeApi.get('/search',{
      params:{q:term}
    });
    
    this.setState({videos:respones.data.items});
  }
  
  render(){
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;