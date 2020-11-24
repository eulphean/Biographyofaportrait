import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

import { isMobile, withOrientationChange } from 'react-device-detect'
// import portrait from '../videos/portrait/8_Tomorrow.mp4'
// import landscape from '../videos/landscape/8_Tomorrow.mp4'
import portrait from '../webm/portrait/8_Tomorrow.webm'
import landscape from '../webm/landscape/8_Tomorrow.webm'
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
  const {isLandscape} = props; 
  let vid = getVideo(); 
  let canvasRef = React.createRef(); 

  return (
    <div style={styles.container} onClick={handleScreenClick.bind(this)}>
      <RadiumLink to="/">
        <VideoCanvas 
          ref={canvasRef}
          src={vid} 
        />
      </RadiumLink>
    </div>
  );

  function handleScreenClick(event) {
    console.log('Screen Click'); 
    canvasRef.current.disableLoop(); 
  }

  function getVideo() {
    if (isMobile) {
      if (isLandscape) {
        return landscape;
      } else {
        return portrait;
      }
    } else {
        return landscape; 
    }
  }
}

export default Radium(withOrientationChange(Tomorrow));