import React from 'react'
import Radium from 'radium'
import { useHistory } from 'react-router-dom'
import { fadeIn } from 'react-animations'

import CameraCanvas from './CameraCanvas.js'
import UserIcon from './UserIcon.js'
import Banner from './Banner.js'
import Folder from './Folder.js'
import graph from '../images/graph.jpg'
import { padding } from './CommonStyles.js'
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
  },

  graph: {
    position: 'absolute',
    objectFit: 'cover',
    height: '100vh',
    width: '100vw'
  }
};

const Today = () => {
    let popupRef = React.createRef(); 
    let bannerRef = React.createRef(); 
    let folderRef = React.createRef();
    let userIconRef = React.createRef(); 
    let cameraCanvas = React.createRef();
    let curHistory = useHistory(); 

    return (
      <div onClick={handleScreenClick.bind(this)} style={styles.contentContainer}>
        <Popup 
          ref={popupRef}
          onSkip={showSkipContent.bind(this)}
          onAuthorize={showAuthorizeContent.bind(this)}
        />
        <CameraCanvas ref={cameraCanvas} />
        <Banner
          ref={bannerRef} 
          onClickInfo={handleInfoClick.bind(this)}
        />
        <UserIcon ref={userIconRef} />
        <Folder 
          ref={folderRef} 
          target={'/Yesterday'}
          history={curHistory}
          isToday={true}
        >
          YESTERDAY
        </Folder>
      </div>
    );

    function handleScreenClick(event) {
      event.stopPropagation(); 
      // if the folder is selected, deSelect it. 
      let isSelected = folderRef.current.isSelected; 
      if (isSelected) {
         folderRef.current.deSelect(); 
      }
    }

    function handleInfoClick() {
      popupRef.current.showPopup(PopupType.About); 
    }

    function showSkipContent() {
      bannerRef.current.showBanner(); 
      folderRef.current.fadeIn();
      userIconRef.current.fadeIn();
    }

    function showAuthorizeContent() {
      cameraCanvas.current.showCameraPrompt(handleSuccess, handleFailure);
    }

    function handleSuccess() {
      console.log('Access Granted'); 
      bannerRef.current.showBanner(); 
      folderRef.current.fadeIn(); 
      cameraCanvas.current.fadeIn();
    }

    function handleFailure() {
      console.log('Access Denied');
      bannerRef.current.showBanner();
      folderRef.current.fadeIn();
      userIconRef.current.fadeIn(); 
    }
}

export default Radium(Today);