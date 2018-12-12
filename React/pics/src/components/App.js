import React from 'react';
import Unsplash from '../api/unsplashAPI';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
  state = { images : [] };
  
  onSearchSubmit = async (term) => {
    const res = await Unsplash.get('/search/photos',{
      params : {query : term},
      
    });
    this.setState({images:res.data.results});
  }
  
  render(){
    return(
    <div className="ui container" style={{paddingTop : '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      <ImageList images={this.state.images} />
    </div>
    );
  }
}
  


export default App;