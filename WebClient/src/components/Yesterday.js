import React from 'react'
import Radium from 'radium'

import { isMobile, withOrientationChange } from 'react-device-detect'
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
    let { land } = props; 
    this.folderRef = React.createRef();
    this.state = {
      isLandscape: land
    }
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
          visible={true}
          target={'/Monday'}>
          MONDAY
        </Folder>
      </div>
    );
  }

  getVideo() {
    if (isMobile) {
      if (this.state.isLandscape) {
        return landscape;
      } else {
        return portrait; 
      }
    } else {
        return landscape;
    }
  }
}

export default Radium(withOrientationChange(Yesterday));
