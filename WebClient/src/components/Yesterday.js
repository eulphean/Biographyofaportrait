import React from 'react'
import Radium from 'radium'

import { isMobile, withOrientationChange } from 'react-device-detect'
import portrait from '../videos/portrait/0_Yesterday.mp4'
import landscape from '../videos/landscape/0_Yesterday.mp4'
import VideoCanvas from './VideoCanvas.js'
import Folder from './Folder'
import { useHistory } from 'react-router-dom'

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh'
  }
};

const Yesterday = (props) => {
  const { isLandscape } = props; 
  let curHistory = useHistory(); 
  let folderRef = React.createRef(); 
  let canvasRef = React.createRef(); 
  let vid = getVideo(); 

  return (
    <div onClick={handleScreenClick.bind(this)} style={styles.container}>
      <VideoCanvas 
        ref={canvasRef}
        src={vid}
      />
      <Folder 
        ref={folderRef}
        history={curHistory}
        visible={true}
        target={'/Monday'}>
        MONDAY
      </Folder>
    </div>
  );

  function handleScreenClick(event) {
      event.stopPropagation(); 
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

export default Radium(withOrientationChange(Yesterday));
