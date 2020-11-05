import React from 'react'
import Radium from 'radium'

import { isMobile, withOrientationChange } from 'react-device-detect'
import portrait from '../videos/portrait/1_Monday.mp4'
import landscape from '../videos/landscape/1_Monday.mp4'
import { useHistory } from 'react-router-dom'
import Folder from './Folder.js'
import VideoCanvas from './VideoCanvas'

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

const Monday = (props) => {
  const { isPortrait } = props; 
  let curHistory = useHistory(); 
  let folderRef = React.createRef(); 
  let canvasRef = React.createRef();  
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
        target={'/Tuesday'}>
        TUESDAY
      </Folder>
    </div>
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

  function handleScreenClick(event) {
    event.stopPropagation();
    canvasRef.current.disableLoop();
    // let isSelected = folderRef.current.isSelected; 
    // if (isSelected) {
    //    folderRef.current.deSelect(); 
    // }
  }
}

export default Radium(withOrientationChange(Monday));