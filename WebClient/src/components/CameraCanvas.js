import React from 'react'
import Radium from 'radium'
import p5 from 'p5-create-capture'
import { fadeIn } from 'react-animations'

const fadeDuration = '2.0s'; 

var sketch = (s) => {
  console.log('Width: ' + s.displayWidth); 
  console.log('Height: ' + s.displayHeight);
  console.log('Device Orientation: ' + s.deviceOrientation);
  let x = s.windowWidth; // Viewport width
  let y = s.windowHeight; // Viewport height

  let capture; let timeouts = []; 

  s.setup = () => {
    s.createCanvas(x, y);
    s.background(0);
  };

  s.draw = () => {
    if (capture && capture.loadedmetadata) {
      let frame = capture.get(0, 0, s.windowWidth, s.windowHeight); 
      // Schedule the frame to be drawn at a later time. 
      let t = setTimeout(s.delayCbkFrame, 2000, frame); 
      timeouts.push(t); 
      s.noLoop(); 
    }
  };

  s.delayCbkFrame = (frame) => {
    // Draw the image. 
    s.image(frame, 0, 0, s.windowWidth, s.windowHeight);
    s.applyFilters();

    // Capture new frame and schedule for the next 2 seconds. 
    let newFrame = capture.get(0, 0, s.windowWidth, s.windowHeight); 
    let t = setTimeout(s.delayCbkFrame, 2000, newFrame); 
    timeouts.push(t); 
  }

  s.setupCamera = (success, failure) => {
    capture = s.createCapture(s.VIDEO, success, failure);
    capture.style('opacity', '0');
    capture.position(0, 0);
    capture.size(s.windowWidth, s.windowHeight);
    capture.elt.style.objectFit = 'cover';
  }

  s.applyFilters = () => {
    // Determine what effects to apply on the image 
    s.filter(s.GRAY);
  }

  s.disable = () => {
    if (capture.height > 0) {
      console.log('Removing camera canvas'); 
      s.noLoop(); 
      capture.stop();
      timeouts.forEach(t => {
        window.clearTimeout(t);
      });
      capture.remove();
      s.remove();
    }
  }

  s.enable = () => {
    s.loop(); 
  }

  s.windowResized = () => {
    capture.remove();
    s.setupCamera(); 
    s.resizeCanvas(s.windowWidth, s.windowHeight);
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
    this.myP5.disable(); 
  }

  enableCamera() {
    this.myP5.enable(); 
  }
}

export default Radium(CameraCanvas);