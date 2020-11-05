import React from 'react'
import Radium from 'radium'
import { useHistory } from 'react-router-dom'
import Folder from './Folder'

import { isMobile, withOrientationChange } from 'react-device-detect'
import portrait from '../videos/portrait/6_Saturday.mp4'
import landscape from '../videos/landscape/6_Saturday.mp4'
import VideoCanvas from './VideoCanvas.js'

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh'
  },

  video: {
    zIndex: '2',
    position: 'absolute',
    objectFit: 'cover',
    height: '100vh'
  }
};

const Saturday = (props) => {
  const {isPortrait} = props; 
  let curHistory = useHistory(); 
  let canvasRef = React.createRef(); 
  let folderRef = React.createRef(); 
  let vid = getVideo(); 

  return (
    <div onClick={handleScreenClick.bind(this)} style={styles.container}>
      <VideoCanvas 
        ref={canvasRef}
        src={vid} />
      <Folder 
        ref={folderRef}
        history={curHistory}
        visible={true}
        target={'/Sunday'}>
        SUNDAY
      </Folder>
    </div>
  );

  function handleScreenClick(event) {
    event.stopPropagation();
    canvasRef.current.disableLoop();
  }

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

export default Radium(withOrientationChange(Saturday));