import React from 'react'
import Radium from 'radium'
import p5 from 'p5-create-capture'
import { fadeIn } from 'react-animations'

const fadeDuration = '2.0s'; 

var sketch = (s) => {
  let capture; let timeouts = []; 

  s.setup = () => {
    s.createCanvas(window.innerWidth, window.innerHeight);
    s.background(0);
  };

  s.draw = () => {
    if (capture && capture.loadedmetadata) {
      let frame = capture.get(0, 0, window.innerWidth, window.innerHeight); 
      // Schedule the frame to be drawn at a later time. 
      let t = setTimeout(s.delayCbkFrame, 2000, frame); 
      timeouts.push(t); 
      s.noLoop(); 
    }
  };

  s.delayCbkFrame = (frame) => {
    // Draw the image. 
    s.image(frame, 0, 0, window.innerWidth, window.innerHeight);
    s.applyFilters();

    // Capture new frame and schedule for the next 2 seconds. 
    let newFrame = capture.get(0, 0, window.innerWidth, window.innerHeight); 
    let t = setTimeout(s.delayCbkFrame, 2000, newFrame); 
    timeouts.push(t); 
  }

  s.setupCamera = (success, failure) => {
    capture = s.createCapture(s.VIDEO, success, failure);
    capture.style('opacity', '0');
    capture.position(0, 0);
    capture.size(window.innerWidth, window.innerHeight);
    capture.elt.style.objectFit = 'cover';
  }

  s.applyFilters = () => {
    // Determine what effects to apply on the image 
    s.filter(s.GRAY);
  }

  s.disable = () => {
    if (capture.height > 0) {
      console.log('Removing camera canvas'); 
      if (capture.elt) {
        capture.remove();
      }
      s.remove();
      timeouts.forEach(t => {
        window.clearTimeout(t);
      });
    }
  }

  s.enable = () => {
    s.loop(); 
  }

  s.windowResized = () => {
    // Remove the capture. 
    if (capture.height > 0 && capture.elt) {
      capture.remove();
    }

    s.setupCamera(); 
    s.resizeCanvas(window.innerWidth, window.innerHeight);
  }
};

const styles = {
  container: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    opacity: '0',
    zIndex: '2'
  },

  fadeIn: {
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    animationDuration: fadeDuration,
    animationFillMode: 'forwards',
    animationTimingFunction:'ease-in'
  },
};

class CameraCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isFadeIn: false
    };

    this.sketchRef = React.createRef(); 
  }

  componentDidMount() {
    this.myP5 = new p5(sketch, this.sketchRef.current); 
  }
  
  render() {
    let containerStyle=styles.container; 
    if (this.state.isFadeIn) {
      containerStyle = [styles.container, styles.fadeIn]; 
    }

    return (
      <div style={containerStyle}>
        <div ref={this.sketchRef}>
        </div>
      </div>
    );
  }

  showCameraPrompt(success, failure) {
    this.myP5.setupCamera(success, failure); 
  }

  fadeIn() {
    this.setState({
      isFadeIn: true
    });
  }

  disableCamera() {
    console.log('Disable Camera');
    this.myP5.disable(); 
  }

  enableCamera() {
    this.myP5.enable(); 
  }
}

export default Radium(CameraCanvas);