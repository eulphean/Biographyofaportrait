import React from 'react'
import Radium from 'radium'
import p5 from 'p5-create-capture'
import { fadeIn } from 'react-animations'

const fadeDuration = '2.0s'; 

var sketch = (s) => {
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
      let t = setTimeout(s.delayCbk, 2000, frame); 
      timeouts.push(t); 
    }
  };

  s.delayCbk = (frame) => {
    // Image is draw inside the canvas. 
    s.image(frame, 0, 0, s.windowWidth, s.windowHeight);
    s.applyFilters();
  }

  s.setupCamera = (success, failure) => {
    capture = s.createCapture(s.VIDEO, success, failure);
    capture.hide();
    capture.position(0, 0);
    capture.size(x, y);
    capture.elt.style.objectFit = 'cover';
  }

  s.applyFilters = () => {
    // Determine what effects to apply on the image 
    s.filter(s.GRAY);

    // if (blurD.elt.checked) {
    //   let val = blurValue.value(); 
    //   filter(BLUR, val); 
    // }

    // if (threshold.elt.checked) {
    //   filter(THRESHOLD); 
    // }

    // if (gray.elt.checked) {
    //   filter(GRAY);
    // }

    // if (invert.elt.checked) {
    //   filter(INVERT); 
    // }

    // if (posterize.elt.checked) {
    //   let val = postValue.value();
    //   filter(POSTERIZE, val);
    // }

    // if (dilate.elt.checked) {
    //   filter(DILATE); 
    // }

    // if (erode.elt.checked) {
    //   filter(ERODE); 
    // }
  }

  s.disable = () => {
    s.noLoop(); 
    capture.stop();
    timeouts.forEach(t => {
      window.clearTimeout(t);
    });
  }

  s.enable = () => {
    s.loop(); 
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
    // Save a callback in the myP5 object to call it later when we 
    // are ready to test camera authentication. 
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