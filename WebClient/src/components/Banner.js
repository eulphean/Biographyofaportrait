import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

// Styles
import { fontFamily, color, fontSize, padding } from './CommonStyles.js'
import clouds from '../images/banner.jpg'
import { ReactComponent as Cloud } from '../svg/cloud.svg'
import { ReactComponent as Close } from '../svg/close.svg'
import { ReactComponent as Info } from '../svg/info.svg'

const RadiumLink = Radium(Link);

var bannerSlideState = {
  Down: 0, 
  Up: 1
}; 
const slideDuration = '3.0s';
const resetDuration = '0.5s';

// Custom slides. 
const customSlideIn = Radium.keyframes({
  from: {
      top: '-100px'
  },
  to: {
      top: '0px'
  }
}, 'slideIn'); 

const customSlideOut = Radium.keyframes({
  from: {
      top: '0px'
  },
  to: {
      top: '-100px'
  }
}, 'slideOut'); 

const styles = {
  container: {
    position: 'absolute',
    width: '100%'
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
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },

  tomorrow: {
    display: 'flex',
    fontFamily: fontFamily.birada,
    color: color.lightGrey,
    fontSize: fontSize.veryBig,
    letterSpacing: 2.5
  },

  tomorrowSuper: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bebas,
    paddingLeft: padding.tiny,
    marginTop: padding.tiny
  },
  
  glimpse: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '2%',
    width: fontSize.extraEnormous
  },

  glimpseText: {
    position: 'absolute',
    textAlign: 'center',
    fontFamily: fontFamily.cursive,
    fontStyle: 'italic',
    marginTop: padding.tiny,
    fontSize: '10px',
    padding: padding.small,
    lineHeight: '12px',
    color: color.darkGrey
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
    padding: padding.tiny,
    backgroundColor: color.darkGrey,
    width: fontSize.extraSmall,
    height: fontSize.extraSmall,
    marginRight: padding.tiny,
    zIndex: '2'
  },

  icon: {
    fill: color.lightGrey,
    width: '80%',
    height: '80%'
  }
};

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      slideState: bannerSlideState.Down
    };
  }

  render() {
    let containerStyle; 
    if (this.state.slideState === bannerSlideState.Down) {
      containerStyle = [styles.container, styles.slideIn]; 
    } else {
      containerStyle = [styles.container, styles.slideOut]; 
    }

    return (
      <div style={containerStyle} onAnimationEnd={this.onAnimationEnded.bind(this)}>
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
            <div style={styles.glimpse}>
                <div style={styles.glimpseText}>
                  glimpse here
                </div>
                <Cloud style={styles.icon}/>
            </div>
            <div style={styles.tomorrow}>
              TOMORROW<sup style={styles.tomorrowSuper}>TM</sup>
            </div>
          </div>
          <img style={styles.clouds} alt={'clouds'} src={clouds} />
        </RadiumLink>
      </div>
    );
  }

  onShowPopup(event) {
    event.stopPropagation();
    this.props.onClickInfo(); 
  }

  handleOnClose(event) {
    // Don't let this event propagate to the banner underneath the button. 
    event.stopPropagation();
    this.setState({
      slideState: bannerSlideState.Up
    }); 
  }

  onAnimationEnded() {
    if (this.state.slideState === bannerSlideState.Up) {
      setTimeout(this.resetBanner.bind(this), resetDuration); 
    }
  }

  resetBanner() {
    this.setState({
      slideState: bannerSlideState.Down
    }); 
  }
}

export default Radium(Banner);