import React from 'react';
import YoutubeApi from '../apis/youtube';
import SearchBar from './searchBar';
import VideoList from './videoList';
import VideoDetail from './videoDetail';

class App extends React.Component{
  state={videos:[],selectVideo:null}
  
  componentDidMount(){
    this.onTermSubmit('cat');
  }
  
  onTermSubmit = async (term)=>{
    const respones = await YoutubeApi.get('/search',{
      params:{q:term}
    });
    
    this.setState({
      videos : respones.data.items,
      selectVideo : respones.data.items[0]
    });
  }
  
  onVideoSelect = (video)=>{
    this.setState({selectVideo:video});
  }
  
  render(){
    return (
      <div className="ui container" style={{paddingTop:'15px'}}>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectVideo}/>
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} videoSelect={this.onVideoSelect}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;