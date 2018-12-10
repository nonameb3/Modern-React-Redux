import {combineReducers} from 'redux';

// Reducers function
//=========================================================
const songsReducers = () => {
  return[
    { title:'No Scrube' , duration:'4:05'},
    { title:'Macarena', duration:'2:30'},
    { title:'All star', duration:'3:50'},
    { title:'The Rain', duration:'4:10'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};
//=========================================================

export default combineReducers({
  songs: songsReducers,
  selectSong: selectedSongReducer
});