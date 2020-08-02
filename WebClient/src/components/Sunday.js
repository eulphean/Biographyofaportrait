import React from 'react'
import Radium from 'radium'

import {useHistory} from 'react-router-dom'

import Folder from './Folder.js'

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

const Sunday = () => {
  let curHistory = useHistory(); 
  let folderRef = React.createRef(); 

  return (
    <div onClick={handleScreenClick.bind(this)} style={styles.container}>
      <Folder 
        ref={folderRef}
        history={curHistory}
        visible={true}
        target={'/'}>
        TODAY
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

export default Radium(Sunday);