import React from 'react';
import { connect } from 'react-redux';
import { fecthPostAndUser } from '../actions';
import UserDetail from './userDetail';

class PostList extends React.Component{
  componentDidMount = ()=> {
    this.props.fecthPostAndUser();
  }

  renderList = () =>{
    const posts = this.props.posts || [];
    return posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"/>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserDetail userId={post.userId}/>
          </div>
        </div>
      );
    })
  }

  render(){
    return(
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    );
  }
}

const MapState = (state) => {
  return {posts : state.posts};
}

export default connect(MapState,{fecthPostAndUser})(PostList);