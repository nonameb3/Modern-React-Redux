import React from 'react';
import './SeasonDisplay.css';

const SeasonConfig ={
  winter :{
    text:'Auu,It is chilly!',
    iconName:'snowflake'
  },
  summer:{
    text:'Let\'s hit the beach!',
    iconName:'sun'
  }
};

const getSeason = (lat,mount)=>{
  if(!lat || (!mount && mount !== 0)) return null;
  if(mount>=3 && mount<=8){
    return lat > 0? 'summer':'winter';
  } else{
    return lat > 0? 'winter':'summer';
  }
};

const SeasonDisplay = (props)=>{
  const season = getSeason(props.lat,new Date().getMonth());
  console.log(getSeason(props.lat,new Date().getMonth()));
  const { text,iconName } = SeasonConfig[season];
  
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}/>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}/>
    </div>
  );
};

export default SeasonDisplay;