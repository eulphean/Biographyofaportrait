import React from 'react'
import Radium from 'radium'
import { useHistory } from 'react-router-dom'

import { isMobile, withOrientationChange } from 'react-device-detect'
// import portrait from '../videos/portrait/3_Wednesday.mp4'
// import landscape from '../videos/landscape/3_Wednesday.mp4'
import portrait from '../webm/portrait/3_Wednesday.webm'
import landscape from '../webm/landscape/3_Wednesday.webm'
import Folder from './Folder'
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

const Wednesday = (props) => {
  const {isLandscape} = props;
  let curHistory = useHistory(); 
  let canvasRef = React.createRef(); 
  let folderRef = React.createRef();
  let vid = getVideo(); 

  return (
    <div style={styles.container}>
      <VideoCanvas 
        ref={canvasRef}
        src={vid} />
      <Folder 
        ref={folderRef}
        history={curHistory}
        onClickCbk={handleFolderClick.bind(this)}
        visible={true}
        target={'/Thursday'}>
        THURSDAY
      </Folder>
    </div>
  );

  function handleFolderClick(event) {
    event.stopPropagation(); 
    canvasRef.current.disableLoop(); 
  }
 
  function getVideo() {
    console.log(isLandscape);
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

export default Radium(withOrientationChange(Wednesday));