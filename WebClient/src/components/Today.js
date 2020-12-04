import React from 'react'
import Radium from 'radium'
// import { useHistory } from 'react-router-dom'
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

class Today extends React.Component {
  constructor(props) {
    super(props); 
    this.popupRef = React.createRef(); 
    this.bannerRef = React.createRef(); 
    this.folderRef = React.createRef();
    this.cameraCanvas = React.createRef();
  }

  componentDidMount() {
    console.log('Component Today Mounted');
    this.props.removeVideo();
  }
  
  render() {
    return (
      <div style={styles.contentContainer}>
        <Popup 
          ref={this.popupRef}
        />
        <CameraCanvas ref={this.cameraCanvas} />
        <Banner
          ref={this.bannerRef} 
          onShowInfo={this.handleInfoClick.bind(this)}
          onHandleClick={this.handleFolderClick.bind(this)}
          showCameraPrompt={this.showCameraPrompt.bind(this)}
          isLandscape = {this.props.isLandscape}
          isPortrait = {this.props.isPortrait}
        />
        <Folder 
          ref={this.folderRef} 
          target={'/Yesterday'}
          onClick={this.handleFolderClick.bind(this)}
          isToday={true}
        >
          YESTERDAY
        </Folder>
      </div>
    );
  }

  handleFolderClick() {
    // Remove the entire canvas. 
    this.cameraCanvas.current.disableCamera();
  }

  handleInfoClick() {
    this.popupRef.current.showPopup(PopupType.About); 
  }

  showCameraPrompt() {
    this.cameraCanvas.current.showCameraPrompt(this.handleSuccess.bind(this), this.handleFailure.bind(this)); 
  }

  handleSuccess() {
    console.log('Access Granted'); 
    this.cameraCanvas.current.fadeIn();
  }

  handleFailure() {
    console.log('Access Denied');
  }
}

export default Radium(Today);