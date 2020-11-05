import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

import { isMobile, withOrientationChange } from 'react-device-detect'
import portrait from '../videos/portrait/8_Tomorrow.mp4'
import landscape from '../videos/landscape/8_Tomorrow.mp4'
import VideoCanvas from './VideoCanvas.js'

const RadiumLink = Radium(Link);

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

// TODO: Bind noLoop...
const Tomorrow = (props) => {
  const {isPortrait} = props; 
  let vid = getVideo(); 

  return (
      <RadiumLink style={styles.container} to="/">
        <VideoCanvas 
        
        src={vid} />
      </RadiumLink>
  );

  function getVideo() {
    let v; 
    if (isMobile) {
      if (isPortrait) {
        v = portrait; 
      } else {
        v = landscape; 
      }
    } else {
        v = landscape; 
    }

    return v; 
  }
}

export default Radium(withOrientationChange(Tomorrow));