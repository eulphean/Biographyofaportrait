import React from 'react'
import Radium from 'radium'

import { isMobile, withOrientationChange } from 'react-device-detect'
// import portrait from '../videos/portrait/1_Monday.mp4'
// import landscape from '../videos/landscape/1_Monday.mp4'
import portrait from '../webm/portrait/1_Monday.webm'
import landscape from '../webm/landscape/1_Monday.webm'
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
  const { isLandscape } = props; 
  let curHistory = useHistory(); 
  let folderRef = React.createRef(); 
  let canvasRef = React.createRef();  
  let vid = getVideo(); 
  console.log(isLandscape);

  return (
    <div style={styles.container}>
      <VideoCanvas 
        ref={canvasRef}
        src={vid} />
      <Folder 
        ref={folderRef}
        onClickCbk={handleFolderClick.bind(this)}
        history={curHistory}
        visible={true}
        target={'/Tuesday'}>
        TUESDAY
      </Folder>
    </div>
  );

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

  function handleFolderClick(event) {
    event.stopPropagation(); 
    canvasRef.current.disableLoop(); 
}
}

export default Radium(withOrientationChange(Monday));