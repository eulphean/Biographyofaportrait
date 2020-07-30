import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

// Styles
import { fontFamily, color, fontSize, padding } from './CommonStyles.js'
import clouds from '../images/banner.jpg'
import gif from '../images/clouds.gif'
import { ReactComponent as Close } from '../svg/close.svg'
import { ReactComponent as Info } from '../svg/info.svg'

const RadiumLink = Radium(Link);

var bannerSlideState = {
  Down: 0, 
  Up: 1
}; 
const slideDuration = '2.0s';
const resetDuration = '0.5s';

// Radium keyframes that will need to updated
// based on the height of the popup. 
let customSlideIn; 
let customSlideOut;

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    zIndex: '100'
  },

  banner: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },

  slideIn: {
    animationName: customSlideIn,
    animationDuration: slideDuration,
    animationFillMode: 'forwards',
    animationTimingFunction: 'ease-in'
  },

  slideOut: {
    animationName: customSlideOut,
    animationDuration: slideDuration,
    animationFillMode: 'forwards',
    animationTimingFunction: 'ease-out'
  },

  clouds: {
    width: '100vw'
  },

  tomorrow: {
    display: 'flex',
    fontFamily: fontFamily.birada,
    color: color.lightGrey,
    fontSize: fontSize.massive,
    letterSpacing: 2.5,
    opacity: '90%'
  },

  tomorrowSuper: {
    fontSize: fontSize.verySmall,
    fontFamily: fontFamily.bebas,
    paddingLeft: padding.tiny,
    marginTop: padding.small
  },

  menu: {
    zIndex: '2',
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    right: '2%',
    top: '10%'
  }, 

  svg: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.greyBack,
    width: fontSize.extraSmall,
    height: fontSize.extraSmall,
    padding: padding.extraSmall,
    marginRight: padding.extraSmall,
    zIndex: '2',
    opacity: '70%'
  },

  icon: {
    fill: color.lightGrey,
    width: '100%',
    height: '100%'
  }
};

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      slideState: bannerSlideState.Down
    };

    this.bannerHeight = 0; // Update on componentDidMount
    this.containerRef = React.createRef(); 
  }

  componentDidMount() {
    setTimeout(this.updateStateNow.bind(this), 200); 
  }

  updateStateNow() {
    // Use container ref to calculate the container height
    this.bannerHeight = parseInt(this.containerRef.current.clientHeight); 
   
    customSlideIn = Radium.keyframes({
      from: {
        top: '-' + this.bannerHeight + 'px'
      },
      to: {
          top: '0px'
      }
    }, 'slideIn'); 

    customSlideOut = Radium.keyframes({
      from: {
          top: '0px'
      },
      to: {
          top: '-' + this.bannerHeight + 'px'
      }
    }, 'slideOut'); 

    this.setState({
      animationStyle: {
        animationName: customSlideIn,
        animationDuration: slideDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-in'
      }
    }); 
  }

  render() {
    let containerStyle; 
    if (this.state.slideState === bannerSlideState.Down) {
      containerStyle = [styles.container, this.state.animationStyle]; 
    } else {
      containerStyle = [styles.container, this.state.animationStyle]; 
    }

    return (
      <div 
        ref={this.containerRef}
        style={containerStyle} 
        onAnimationEnd={this.onAnimationEnded.bind(this)}>
        <div style={styles.menu}>
          <div onClick={this.onShowPopup.bind(this)} style={styles.svg}>
            <Info style={styles.icon} />
          </div>
          <div onClick={this.handleOnClose.bind(this)} style={styles.svg}>
            <Close style={styles.icon} />
          </div>
        </div>
        <RadiumLink to='/Tomorrow'>
          <div style={styles.banner}>
            <div style={styles.tomorrow}>
              TOMORROW<sup style={styles.tomorrowSuper}>TM</sup>
            </div>
          </div>
          <img style={styles.clouds} alt={'clouds'} src={gif} />
        </RadiumLink>
      </div>
    );
  }

  onShowPopup(event) {
    this.props.onClickInfo(); 
  }

  handleOnClose(event) {
    this.setState({
      slideState: bannerSlideState.Up,
      animationStyle: {
        animationName: customSlideOut,
        animationDuration: slideDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-in'
      }
    }); 
  }

  onAnimationEnded() {
    if (this.state.slideState === bannerSlideState.Up) {
      setTimeout(this.resetBanner.bind(this), resetDuration); 
    }
  }

  resetBanner() {
    this.setState({
      slideState: bannerSlideState.Down,
      animationStyle: {
        animationName: customSlideIn,
        animationDuration: slideDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-in'
      }
    }); 
  }
}

export default Radium(Banner);