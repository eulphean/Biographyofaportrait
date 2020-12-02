import React from 'react'
import Radium from 'radium'
// import { Link } from 'react-router-dom'

import { isMobile, withOrientationChange } from 'react-device-detect'
import portrait from '../videos/portrait/8_Tomorrow.mp4'
import landscape from '../videos/landscape/8_Tomorrow.mp4'

class Tomorrow extends React.Component{
  constructor(props) {
    super(props); 
    let { isLandscape } = props; 
    this.state = {
      isLandscape: isLandscape
    }; 
  }

  componentDidMount() {
    let v = this.getVideo(); 
    this.props.setupVideo(v); 
  }

  render() {
    return null;
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

export default Radium(withOrientationChange(Tomorrow));