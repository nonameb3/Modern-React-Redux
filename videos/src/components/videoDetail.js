import React from 'react';

const VideoDetail = ({ video })=>{
  if(!video){
    return <div>Loading..</div>;
  }
  const url =`https://www.youtube.com/embed/${video.id.videoId||video.id.channelId}`;
  
  return(
  <div>
    <div className="ui embed">
      <iframe title="video player" src={url} />
    </div>
    <div className="ui segment">
      <div className="ui header">{video.snippet.title}</div>
      <div className="description">
        {video.snippet.description}
      </div>
    </div>
  </div>
  
  );
};

export default VideoDetail;