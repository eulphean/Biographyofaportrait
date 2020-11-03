import React from 'react'
import Radium from 'radium'
import { useHistory } from 'react-router-dom'

import { isMobile, withOrientationChange } from 'react-device-detect'
import portrait from '../videos/portrait/3_Wednesday.mp4'
import landscape from '../videos/landscape/3_Wednesday.mp4'
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
  const {isPortrait} = props;
  let curHistory = useHistory(); 
  let folderRef = React.createRef();
  let vid = getVideo(); 

  return (
    <div onClick={handleScreenClick.bind(this)} style={styles.container}>
      <VideoCanvas src={vid} />
      <Folder 
        ref={folderRef}
        history={curHistory}
        visible={true}
        target={'/Thursday'}>
        THURSDAY
      </Folder>
    </div>
  );

  function handleScreenClick(event) {
    event.stopPropagation();
    let isSelected = folderRef.current.isSelected; 
    if (isSelected) {
      folderRef.current.deSelect(); 
    }
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

export default Radium(withOrientationChange(Wednesday));