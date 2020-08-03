import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

// Styles
import { fontFamily, color, fontSize, padding } from './CommonStyles.js'
import gif from '../images/clouds.gif'
import { ReactComponent as Close } from '../svg/close.svg'
import { ReactComponent as Info } from '../svg/info.svg'

const RadiumLink = Radium(Link);

var bannerSlideState = {
  Down: 0, 
  Up: 1,
  None: 2
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
    zIndex: '100',
    top: '-999px'
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

  // Determines the height of the Banner. 
  // Use the media query to determine the height
  // for each device. 
  clouds: {
    width: '100%',
    
    '@media (min-width: 1200px)': {      
      height: '150px'
    },
  },

  tomorrow: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    fontFamily: fontFamily.beth,
    color: color.lightGrey,
    fontSize: fontSize.veryBig,
    letterSpacing: 3.0,
    opacity: '80%',

    '@media (min-width: 1200px)': {      
      fontSize: fontSize.gaia
    }
  },

  tomorrowSuper: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.grotesk,
    paddingLeft: padding.tiny,
    marginTop: padding.verySmall,

    '@media (min-width: 1200px)': {    
      marginTop: '-' + padding.huge,
      paddingLeft: padding.small,  
      fontSize: fontSize.veryHuge
    }
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
    opacity: '70%',

    '@media (min-width: 1200px)': {    
      marginRight: padding.verySmall,
      padding: padding.verySmall,  
      height: fontSize.verySmall,
      width: fontSize.verySmall
    }
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
      slideState: bannerSlideState.None
    };

    this.bannerHeight = 0; // Update on componentDidMount
    this.containerRef = React.createRef(); 
  }

  componentDidMount() {
    setTimeout(this.updateStateNow.bind(this), 500); 
  }

  updateStateNow() {
    // Use container ref to calculate the container height
    this.bannerHeight = parseInt(this.containerRef.current.clientHeight); 
    //this.bannerHeight = '100px';
   
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
    } else if (this.state.slideState === bannerSlideState.Up) {
      containerStyle = [styles.container, this.state.animationStyle]; 
    } else {
      containerStyle = [styles.container];
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
          <div style={styles.tomorrow}>
            TOMORROW<sup style={styles.tomorrowSuper}>TM</sup>
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
      setTimeout(this.showBanner.bind(this), resetDuration); 
    }
  }

  showBanner() {
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