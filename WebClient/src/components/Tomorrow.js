import React from 'react'
import Radium from 'radium'

import { isMobile } from 'react-device-detect'
import portrait from '../videos/portrait/8_Tomorrow.mp4'
import landscape from '../videos/landscape/8_Tomorrow.mp4'

class Tomorrow extends React.Component{
  componentDidMount() {
    console.log(this.props);
    console.log('isPortrait: ' + this.props.isPortrait);
    console.log('isLandscape: ' + this.props.isLandscape);
    let v = this.getVideo(this.props); 
    this.props.setupVideo(v, '/'); 
  }

  render() {
    return null;
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
      this.props.setupVideo(vid, '/');
    }

    return true; 
  }

  getVideo(props) {
    if (isMobile) {
      if (props.isLandscape) {
        console.log('Landscape');
        return landscape;
      } else if (props.isPortrait){
        console.log('Portrait');
        return portrait;
      }
    } else {
        console.log('Not mobile');
        return landscape; 
    }
  }
}

export default Radium(Tomorrow);