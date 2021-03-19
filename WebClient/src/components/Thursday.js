import React from 'react'
import Radium from 'radium'

import { isMobile, isIPad13, isTablet} from 'react-device-detect'
import portrait from '../videos/portrait/4_Thursday.mp4'
import landscape from '../videos/landscape/4_Thursday.mp4'
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
  },

  video: {
    zIndex: '2',
    position: 'absolute',
    objectFit: 'fill',
    height: '100vh'
  }
};

class Thursday extends React.Component {
  constructor(props) {
    super(props); 
    this.folderRef = React.createRef(); 
  }

  componentDidMount() {
    let vid = this.getVideo(this.props);
    this.props.setupVideo(vid); 
  }

  render() {
    return (
      <div style={styles.container}>
        <Folder 
          ref={this.folderRef}
          onClick={this.onClick.bind(this)}
          visible={true}
          target={'/Friday'}>
          FRIDAY
        </Folder>
      </div>
    ); 
  }

  shouldComponentUpdate(nextProps, nextState) {
    // If the landscape or portrait changes. 
    if (nextProps.isLandscape !== this.props.isLandscape) {
      if (nextProps.isLandscape) {
        console.log('IsLandscape'); 
      } else {
        console.log('IsPortrait');
      }

      // Remove the previous video. 
      this.props.removeVideo(); 
      let vid = this.getVideo(nextProps);
      // Attach a new video. 
      this.props.setupVideo(vid);
    }

    return true; 
  }

  getVideo(props) {
    if (isMobile || isIPad13 || isTablet) {
      if (props.isLandscape) {
        console.log('Landscape');
        return landscape;
      } else if (props.isPortrait){
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

export default Radium(Thursday);