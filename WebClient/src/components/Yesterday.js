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
  const {isPortrait} = props; 
  let curHistory = useHistory(); 
  let folderRef = React.createRef(); 
  let vid = getVideo(); 
  let canvasRef = React.createRef(); 

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
  
      // let isSelected = folderRef.current.isSelected; 
      // if (isSelected) {
      //    folderRef.current.deSelect(); 
      // }
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

export default Radium(withOrientationChange(Yesterday));
