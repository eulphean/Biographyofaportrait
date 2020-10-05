import React from 'react'
import Radium from 'radium'
import { fadeIn } from 'react-animations'
import { ReactComponent as User } from '../svg/banda.svg'
import { color } from './CommonStyles.js'

const fadeDuration = '2.0s'; 

const styles = {
  container: {
    zIndex: '95',
    position: 'absolute',
    overflow:'none',
    opacity: '0',
    width: '100%',
    bottom: '-10px',

    '@media (min-width: 400px)': {  
      width: '100%',
      bottom: '-10px'
    },

    '@media (min-width: 400px) and (orientation: landscape)': {  
      width: '40%',
      bottom: '-10px'
    },

    '@media (min-width: 900px)': {  
      width: '950px',
      bottom: '-50px'
    }
  },

  icon: {
    width: '100%',
    height: '100%',
    fill: color.greyBack,
  },

  fadeIn: {
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    animationDuration: fadeDuration,
    animationFillMode: 'forwards',
    animationTimingFunction:'ease-in'
  }
};

class UserIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isFadeIn: false
    };

    this.clickCount = 0; 
  }

  componentDidMount() {
    // this.fadeIn(); 
  }

  render() {
    let containerStyle=styles.container; 
    
    if (this.state.isFadeIn) {
      containerStyle = [styles.container, styles.fadeIn]; 
    }

    return (
     <div style={containerStyle}>
        <User style={styles.icon}/>
      </div>
    );
  }

  fadeIn() {
    this.setState({
      isFadeIn: true
    });
  }
}

export default Radium(UserIcon);