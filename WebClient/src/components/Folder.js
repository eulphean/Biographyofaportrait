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
    opacity: '0'
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

  folder: {
    width: fontSize.extraMassive,
    padding: padding.verySmall
  },

  folderBg: {
    position: 'absolute',
    width: fontSize.extraMassive,
    height: fontSize.extraMassive,
    backgroundColor: color.darkGrey,
    top: '0%',
    zIndex: '-999',
    padding: padding.verySmall,
    opacity: '0.6'
  },

  folderBgHide: {
    opacity: '0'
  },

  icon: {
      width: '100%',
      height: '100%'
  },

  title: {
      marginTop: padding.tiny,
      backgroundColor: color.darkGrey,
      color: color.lightGrey,
      padding: padding.extraSmall,
      fontSize: fontSize.verySmall,
      fontFamily: fontFamily.grotesk,
      letterSpacing: '1px'
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
           <div style={styles.folder}>
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
    this.setState({
      isSelected: true
    });

    setTimeout(this.checkDoubleClick.bind(this), 200); 
  }

  checkDoubleClick() {
    if (this.clickCount >= 2) {
      // Double Click fired. 
      console.log('Double Click Detected, Go to: ' + this.props.target); 
      this.props.history.push(this.props.target);
    }

    this.clickCount = 0; 
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