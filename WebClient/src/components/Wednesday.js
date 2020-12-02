import React from 'react'
import Radium from 'radium'

import { isMobile } from 'react-device-detect'
import portrait from '../videos/portrait/3_Wednesday.mp4'
import landscape from '../videos/landscape/3_Wednesday.mp4'
import Folder from './Folder'

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

class Wednesday extends React.Component {
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
          visible={true}
          onClick={this.onClick.bind(this)}
          target={'/Thursday'}>
          THURSDAY
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


export default Radium(Wednesday);