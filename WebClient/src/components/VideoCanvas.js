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
    console.log('Creating video');
    video = s.createVideo(vid); 
    video.hide();
    console.log(video);
    video.elt.setAttribute('playsinline', '');
    video.elt.setAttribute('autoplay', true);
    video.elt.setAttribute('loop', true);
  };

  s.vidLoad = () => {
    console.log('Video Loaded');
    video.hide();
    video.loop();
  };
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

class VideoCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isFadeIn: false
    };

    this.sketchRef = React.createRef(); 
  }

  componentDidMount() {
    this.myP5 = new p5(sketch, this.sketchRef.current); 
    this.myP5.initVideo(this.props.src); 
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
}

export default Radium(VideoCanvas);