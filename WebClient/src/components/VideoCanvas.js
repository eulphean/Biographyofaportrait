import React from 'react'
import Radium from 'radium'
import p5 from 'p5-create-capture'
import { fadeIn } from 'react-animations'

const fadeDuration = '2.0s'; 

var sketch = (s) => {
  let x = s.windowWidth; // Viewport width
  let y = s.windowHeight; // Viewport height
  let video; 

  s.setup = () => {
    s.createCanvas(x, y);
  };

  s.draw = () => {
    if (video) {
      s.image(video, 0, 0, x, y); 
    }  
  };

  s.initVideo = (vid) => {
    video = s.createVideo(vid, s.vidLoaded); 
    video.hide();
    video.elt.setAttribute('playsinline', '');
    // video.elt.muted = true;
    video.elt.setAttribute('autoplay', true);
    video.elt.setAttribute('loop', true);
  };

  s.vidLoaded = () => {
    video.hide(); 
    video.play(); 
  }

  s.disableLoop = () => {
    s.noLoop();
    video.mute = true;
    // Remove canvas completely. 
    s.remove();
  }
};

const styles = {
  container: {
    position: 'absolute',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    objectFit: 'cover',
    width: '100vw',
    height: '100vh',
    top: '0%',
    left: '0%',
    opacity: '0',
    zIndex: '1'
  },

  fadeIn: {
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    animationDuration: fadeDuration,
    animationFillMode: 'forwards',
    animationTimingFunction:'ease-in'
  },
};

class VideoCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isFadeIn: false,
      video: this.props.src
    };

    this.sketchRef = React.createRef(); 
  }

  componentDidMount() {
    console.log('Canvas Mounted');
    this.myP5 = new p5(sketch, this.sketchRef.current);
    console.log('Creating video on mount');
    this.myP5.initVideo(this.props.src); 
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.src !== this.props.src) {
      // Create a new video. 
      this.myP5.initVideo(nextProps.src); 
    }

    return true; 
  }
  
  render() {
    let containerStyle=[styles.container, styles.fadeIn]; 

    return (
      <div style={containerStyle}>
        <div ref={this.sketchRef}>
        </div>
      </div>
    );
  }

  disableLoop() {
    this.myP5.disableLoop(); 
    console.log('Disable Loop'); 
  }
}

export default Radium(VideoCanvas);