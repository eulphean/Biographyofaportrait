import React from 'react'
import Radium from 'radium'
import vid from '../videos/testLandscape.mp4'
import VideoCanvas from './VideoCanvas.js'
import Folder from './Folder'
import { useHistory } from 'react-router-dom'

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
};


const Yesterday = () => {
  let curHistory = useHistory(); 
  let folderRef = React.createRef(); 

  return (
    <div onClick={handleScreenClick.bind(this)} style={styles.container}>
      <Folder 
        ref={folderRef}
        history={curHistory}
        visible={true}
        target={'/Monday'}>
        MONDAY
      </Folder>
      <VideoCanvas src={vid} />
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

export default Radium(Yesterday);
