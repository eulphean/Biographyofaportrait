import React from 'react'
import Radium from 'radium'
import p5 from 'p5-create-capture'
import { fadeIn } from 'react-animations'

const fadeDuration = '2.0s'; 

var sketch = (s) => {
  let x = s.windowWidth; // Viewport width
  let y = s.windowHeight; // Viewport height
  let capture;

  s.setup = () => {
    s.createCanvas(x, y);
  };

  s.draw = () => {
    s.background(255);
    s.fill(255,0, 0);
    s.rect(x,y,50,50);
    // if (capture && !hasFrameTested) {
    //   console.log('Schedule test'); 
    //   setTimeout(s.frameTest, 5000); // This delay is for the camera to start and collet the first frame of the image. 
    //   hasFrameTested = true; 
    // }
  };

  s.setupCamera = (success, failure) => {
    capture = s.createCapture(s.VIDEO, success, failure);
    capture.position(0, 0);
    capture.size(x, y);
    capture.elt.style.objectFit = 'cover';
  }
};

const styles = {
  container: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    opacity: '0'
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
}

export default Radium(CameraCanvas);