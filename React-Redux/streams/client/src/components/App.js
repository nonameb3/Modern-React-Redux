import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
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
        <Router history={history}>
          <div>
            <Header/>
            <Route path="/" exact component={streamList}/>
            <Route path="/streams/new" exact component={streamCreate}/>
            <Route path="/streams/edit/:id" exact component={streamEdit}/>
            <Route path="/streams/delete/:id" exact component={streamDelete}/>
            <Route path="/streams/show" exact component={streamShow}/>
          </div>
        </Router>
      </div>
    );
  };
}

export default App;