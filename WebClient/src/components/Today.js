import React from 'react'
import Radium from 'radium'
import { useHistory } from 'react-router-dom'
import { fadeIn } from 'react-animations'
// import graph from '../images/graph.jpg'

import CameraCanvas from './CameraCanvas.js'
// import UserIcon from './UserIcon.js'
import Banner from './Banner.js'
import Folder from './Folder.js'
import Popup, { PopupType }  from './Popup.js'

const fadeDuration = '0.5s'; 

const styles = {
  contentContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    overflow: 'hidden'
  },

  fadeIn: {
    animationName: Radium.keyframes(fadeIn, 'fadeInDown'),
    animationDuration: fadeDuration,
    animationFillMode: 'forwards',
    animationTimingFunction:'ease-in'
  }
};

const Today = (props) => {
    let popupRef = React.createRef(); 
    let bannerRef = React.createRef(); 
    let folderRef = React.createRef();
    // let userIconRef = React.createRef(); 
    let cameraCanvas = React.createRef();
    let curHistory = useHistory(); 

    return (
      <div style={styles.contentContainer}>
        {/* <img style={styles.graph} alt='graph' src={graph} /> */}
        <Popup 
          ref={popupRef}
          // onSkip={showSkipContent.bind(this)}
          // onAuthorize={showAuthorizeContent.bind(this)}
        />
        <CameraCanvas ref={cameraCanvas} />
        <Banner
          ref={bannerRef} 
          onShowInfo={handleInfoClick.bind(this)}
          onHandleClick={handleFolderClick.bind(this)}
          showCameraPrompt={showCameraPrompt.bind(this)}
        />
        {/* <UserIcon ref={userIconRef} /> */}
        <Folder 
          ref={folderRef} 
          target={'/Yesterday'}
          history={curHistory}
          onClickCbk={handleFolderClick.bind(this)}
          isToday={true}
        >
          YESTERDAY
        </Folder>
      </div>
    );

    function handleFolderClick(event) {
      // event.stopPropagation(); 
      // Remove the entire canvas. 
      cameraCanvas.current.disableCamera();
    }

    function handleInfoClick() {
      popupRef.current.showPopup(PopupType.About); 
    }

    function showCameraPrompt() {
      cameraCanvas.current.showCameraPrompt(handleSuccess, handleFailure); 
    }

    function handleSuccess() {
      console.log('Access Granted'); 
      cameraCanvas.current.fadeIn();
    }

    function handleFailure() {
      console.log('Access Denied');
      // userIconRef.current.fadeIn(); 
    }
}

export default Radium(Today);