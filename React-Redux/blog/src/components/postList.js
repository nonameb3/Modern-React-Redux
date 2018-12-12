import React from 'react';
import { connect } from 'react-redux';
import { fecthPost } from '../actions';

class PostList extends React.Component{
  componentDidMount = ()=> {
    this.props.fecthPost();
  }

  render(){
    return(
      <div>PostList</div>
    );
  }
}

export default connect(null,{fecthPost})(PostList);