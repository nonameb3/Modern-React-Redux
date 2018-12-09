import React from 'react';
import VideoItem from './videoItem';

const VideoList = (props)=>{
  const VideoItems = props.videos.map((video)=>{
    return <VideoItem key={video.id.videoId} video={video}/>;
  });
  
  return <div>{VideoItems}</div>;
};

export default VideoList;