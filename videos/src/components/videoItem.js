import React from 'react';

class VideoItem extends React.Component{
  video = this.props.video;
  
  render(){
    return (
      <div>
        <img src={this.video.snippet.thumbnails.medium.url} alt="" />
        {this.video.snippet.title}
      </div>  
    );
  }
}

export default VideoItem;