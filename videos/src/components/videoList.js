import React from 'react';
import VideoItem from './videoItem';

const VideoList = (props)=>{
  const VideoItems = props.videos.map((video)=>{
    return <VideoItem key={video.id.videoId||video.id.channelId} video={video} videoSelect={props.videoSelect}/>;
  });
  
  return <div className="ui relaxed divided list">{VideoItems}</div>;
};

export default VideoList;