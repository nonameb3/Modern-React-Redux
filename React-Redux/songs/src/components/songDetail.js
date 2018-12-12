import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
  if(!song){
    return <div>Select Songs</div>;
  }
  
  return(
    <div>
      <h3>Detail for:</h3>
      <p>Title : {song.title}</p>
      <p>Duration : {song.duration}</p>
    </div>
  );
};

// Map redux state to SongDetail'props
const MapStateToProps = (state)=>{
  return {song : state.selectSong};
};

export default connect(MapStateToProps)(SongDetail);