import React from 'react'
import Radium from 'radium'
import p5 from 'p5-create-capture'
import { fadeIn } from 'react-animations'
import { Link } from 'react-router-dom'

const RadiumLink = Radium(Link);


const fadeDuration = '2.0s'; 

var sketch = (s) => {
  let x = s.windowWidth; // Viewport width
  let y = s.windowHeight; // Viewport height
  let video; 

  s.setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
  };

  s.draw = () => {
    if (video) {
      s.image(video, 0, 0, s.windowWidth, s.windowHeight); 
    }  
  };

  s.initVideo = (vid) => {
    // Resize the canvas. This is helpful when
    // the device has just rotated. 
    s.resizeCanvas(s.windowWidth, s.windowHeight); 

    // Update Canvas width 
    console.log('Init Video');
    video = s.createVideo(vid, s.vidLoaded); 

    //video.hide();
    video.style('opacity', '0%');
    // video.style('opacity', '0'); 
    video.elt.setAttribute('playsinline', '');
    // video.elt.muted = true;
    video.elt.setAttribute('autoplay', true);
    video.elt.setAttribute('loop', true);
    if (s.canvas) {
      s.clear();
    }
  };

  s.vidLoaded = () => {
    video.hide(); 
    video.play(); 
  }

  s.removeVideo = () => {
    if (video) {
      console.log('Removing Previous Video');
      video.elt.remove();
      if (s.canvas) {
        s.canvas.style.visibility = 'hidden';
      }
    }
  }

  s.showCanvas = () => {
    if (s.canvas) {
      console.log('Show canvas'); 
      s.canvas.style.visibility = 'visible'; 
    }
  }

  s.windowResized = () => {
    s.resizeCanvas(s.windowWidth, s.windowHeight);
  }
};

const styles = {
  container: {
    position: 'absolute',
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
      video: this.props.src,
      path: '/'
    };

    this.sketchRef = React.createRef(); 
  }

  componentDidMount() {
    console.log('Canvas Mounted');
    this.myP5 = new p5(sketch, this.sketchRef.current);
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
      <RadiumLink to={this.state.path}>
        <div style={containerStyle}>
          <div ref={this.sketchRef}>
          </div>
        </div>
      </RadiumLink>
    );
  }

  removeVideo() {
    this.myP5.removeVideo(); 
  }

  showCanvas(src, target) {
    this.myP5.initVideo(src); 
    this.myP5.showCanvas();
    this.setState({
      path: target
    })
  }
}

export default Radium(VideoCanvas);