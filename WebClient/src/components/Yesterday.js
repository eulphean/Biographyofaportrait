import React from 'react'
import Radium from 'radium'

import { isMobile } from 'react-device-detect'
import portrait from '../videos/portrait/0_Yesterday.mp4'
import landscape from '../videos/landscape/0_Yesterday.mp4'
// import VideoCanvas from './VideoCanvas.js'
import Folder from './Folder'
// import { useHistory } from 'react-router-dom'

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

class Yesterday extends React.Component {
  constructor(props) {
    super(props); 
    this.folderRef = React.createRef();
  }

  componentDidMount() {
    let vid = this.getVideo(); 
    this.props.setupVideo(vid);
  }

  render() {
    return (
      <div style={styles.container}>
        <Folder 
          ref={this.folderRef}
          onClick={this.onClick.bind(this)}
          visible={true}
          target={'/Monday'}>
          MONDAY
        </Folder>
      </div>
    );
  }

  getVideo() {
    if (isMobile) {
      if (this.props.isLandscape) {
        console.log('Landscape');
        return landscape;
      } else if (this.props.isPortrait){
        console.log('Portrait');
        return portrait;
      }
    } else {
        return landscape; 
    }
  }

  onClick() {
    this.props.removeVideo(); 
  }
}

export default Radium(Yesterday);
