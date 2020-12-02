import React from 'react'
import Radium from 'radium'

import { isMobile } from 'react-device-detect'
import portrait from '../videos/portrait/8_Tomorrow.mp4'
import landscape from '../videos/landscape/8_Tomorrow.mp4'

class Tomorrow extends React.Component{
  componentDidMount() {
    let v = this.getVideo(); 
    this.props.setupVideo(v); 
  }

  render() {
    return null;
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
}

export default Radium(Tomorrow);