import React from 'react'
import Radium from 'radium'

import { useHistory } from 'react-router-dom'
import Folder from './Folder.js'
import vid from '../videos/testLandscape.mp4'
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

const Monday = () => {
  let curHistory = useHistory(); 
  let folderRef = React.createRef(); 

  return (
    <div onClick={handleScreenClick.bind(this)} style={styles.container}>
      <VideoCanvas src={vid} />
      <Folder 
        ref={folderRef}
        history={curHistory}
        visible={true}
        target={'/Tuesday'}>
        TUESDAY
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
}

export default Radium(Monday);