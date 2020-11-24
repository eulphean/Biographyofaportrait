import React from 'react'
import Radium from 'radium'
import { useHistory } from 'react-router-dom'
import Folder from './Folder'

import { isMobile, withOrientationChange } from 'react-device-detect'
// import portrait from '../videos/portrait/6_Saturday.mp4'
// import landscape from '../videos/landscape/6_Saturday.mp4'
import portrait from '../webm/portrait/6_Saturday.webm'
import landscape from '../webm/landscape/6_Saturday.webm'
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
        target={'/Sunday'}>
        SUNDAY
      </Folder>
    </div>
  );

  function handleFolderClick(event) {
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

export default Radium(withOrientationChange(Saturday));