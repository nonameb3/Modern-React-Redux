import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import streamCreate from './streams/streamCreate';
import streamDelete from './streams/streamDelete';
import streamEdit from './streams/streamEdit';
import streamList from './streams/streamList';
import streamShow from './streams/streamShow';
import Header from './header';

class App extends React.Component{
  render(){
    return(
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route path="/" exact component={streamList}/>
            <Route path="/streams/new" exact component={streamCreate}/>
            <Route path="/streams/edit" exact component={streamEdit}/>
            <Route path="/streams/delete" exact component={streamDelete}/>
            <Route path="/streams/show" exact component={streamShow}/>
          </div>
        </BrowserRouter>
      </div>
    );
  };
}

export default App;