import React from 'react'
import Radium from 'radium'
import { fadeIn } from 'react-animations'

import { ReactComponent as FolderIcon } from '../svg/folder.svg'
import { fontSize, color, padding, fontFamily } from './CommonStyles.js'

const fadeDuration = '2.0s'; 

const styles = {
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0',
    zIndex: '2'
  },

  fadeIn: {
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    animationDuration: fadeDuration,
    animationFillMode: 'forwards',
    animationTimingFunction:'ease-in'
  },

  folderContainer: {
    position: 'relative',
    display: 'flex'
  },

  folderBg: {
    position: 'absolute',
    backgroundColor: color.darkGrey,
    top: '0%',
    zIndex: '-999',
    padding: padding.verySmall,
    opacity: '0.6',

    // Default
    width: fontSize.extraMassive,
    height: fontSize.extraMassive,

    '@media (min-width: 600px)': {    
      width: fontSize.insane,
      height: fontSize.insane
    },

    '@media (min-width: 900px)': {    
      width: fontSize.gaia,
      height: fontSize.gaia
    }
  },

  folderBgHide: {
    opacity: '0'
  },

  iconContainer: {
    padding: padding.verySmall,

    // Defualt
    width: fontSize.extraMassive,

    '@media (min-width: 600px)': {    
      width: fontSize.insane
    },

    '@media (min-width: 900px)': {    
      width: fontSize.gaia
    }
  },

  icon: {
      width: '100%',
      height: '100%'
  },

  title: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: padding.tiny,
      backgroundColor: color.darkGrey,
      color: color.lightGrey,
      padding: padding.verySmall,
      fontFamily: fontFamily.bebas,
      letterSpacing: '2px',

      // Default
      fontSize: fontSize.verySmall,
      width: fontSize.extraMassive,

      '@media (min-width: 600px)': {    
        fontSize: fontSize.small,
        width: fontSize.insane
      },

      '@media (min-width: 900px)': {    
        fontSize: fontSize.big,
        width: fontSize.gaia
      }
  },

  titleSelected: {
    backgroundColor: color.selected
  },

  today: {
    zIndex: 99,
    bottom: '5%',
    left: '5%'
  }
};

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isSelected: false,
      isFadeIn: false
    };

    this.clickCount = 0;
    this.timeout = ''; 
  }

  render() {
    let folderBgStyle = this.state.isSelected ? styles.folderBg : styles.folderBgHide; 
    let titleStyle = this.state.isSelected ? [styles.title, styles.titleSelected] : styles.title;
    let containerStyle=styles.container; 
    
    if (this.state.isFadeIn || this.props.visible) {
      containerStyle = [styles.container, styles.fadeIn]; 
    }

    if (this.props.isToday) {
      containerStyle = [containerStyle, styles.today];
    }

    return (
      <div onClick={this.handleClick.bind(this)} style={containerStyle}>
         <div style={styles.folderContainer}>
           <div style={styles.iconContainer}>
              <FolderIcon style={styles.icon} />
           </div>
           <div style={folderBgStyle}></div>
         </div>
         <div style={titleStyle}>
             {this.props.children}
         </div>
      </div>
    );
  }

  handleClick(event) {
    event.stopPropagation(); 
    this.clickCount += 1; 
    
    if (!this.state.isSelected) {
      this.setState({
        isSelected: true
      });
    }

    console.log('Click happened: ' + this.clickCount); 

    if (this.timeout === '') {
      this.timeout = setTimeout(this.checkDoubleClick.bind(this), 1000); 
      console.log('Setting Timeout'); 
    }
  }

  checkDoubleClick() {
    if (this.clickCount >= 2 ) {
      // Double Click fired. 
      console.log('Double Click Detected, Go to: ' + this.props.target); 
      this.props.history.push(this.props.target);
    }

    this.clickCount = 0; 
    clearTimeout(this.timeout); 
    this.timeout = ''; 
    console.log('Clearing timeout.'); 
  }

  // Check the current selected state of the folder. 
  isSelected() {
    return this.state.isSelected; 
  }

  deSelect() {
    this.setState({
      isSelected: false
    }); 
  }

  fadeIn() {
    this.setState({
      isFadeIn: true
    });
  }
}

export default Radium(Folder);