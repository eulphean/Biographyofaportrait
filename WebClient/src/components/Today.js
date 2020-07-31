import React from 'react'
import Radium from 'radium'
import p5 from 'p5'
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
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',

    '@media (min-width: 768px)': {  
      marginLeft: padding.enourmous,
      marginRight: padding.enourmous,
    },
  },

  fadeIn: {
    animationName: Radium.keyframes(fadeIn, 'fadeInDown'),
    animationDuration: fadeDuration,
    animationFillMode: 'forwards',
    animationTimingFunction:'ease-in'
  },

  background: {
    position: 'absolute',
    width: '100%'
  },

  folder: {
    zIndex: 99,
    position: 'fixed',
    bottom: '5%',
    left: '5%'
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
      <div onClick={handleScreenClick.bind(this)} style={styles.container}>
        <img style={styles.background} alt='graph' src={graph} />
        <CameraCanvas ref={cameraCanvas} />
        <Banner
          ref={bannerRef} 
          onClickInfo={handleInfoClick.bind(this)}
        />
        <UserIcon ref={userIconRef} />
        <div style={styles.folder}>
          <Folder 
            ref={folderRef} 
            target={'/Yesterday'}
            history={curHistory}
          >
            YESTERDAY
          </Folder>
        </div>
        <Popup 
          ref={popupRef}
          onShowContent={onShowContent.bind(this)}
        />
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

    function onShowContent() {
      bannerRef.current.showBanner(); 
      folderRef.current.fadeIn();
      userIconRef.current.fadeIn();
      cameraCanvas.current.fadeIn();
    }

}

export default Radium(Today);