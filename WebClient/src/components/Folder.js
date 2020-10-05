import React from 'react'
import Radium from 'radium'
import { fadeIn } from 'react-animations'

import { ReactComponent as FolderIcon } from '../svg/folder.svg'
import { fontSize, color, padding, fontFamily } from './CommonStyles.js'
import { Link } from 'react-router-dom'

const RadiumLink = Radium(Link);

const fadeDuration = '2.0s'; 

const styles = {
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '1',
    zIndex: '99'
  },

  containerToday: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '1',
    zIndex: '99',
    bottom: '5%',
    left: '5%'
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

  iconContainer: {
    padding: padding.extraSmall,

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
      backgroundColor: color.darkGrey,
      color: color.lightGrey,
      padding: padding.extraSmall,
      fontFamily: fontFamily.helvetica,
      letterSpacing: '1px',

      // Default
      fontSize: fontSize.verySmall,
      // width: fontSize.extraMassive,

      '@media (min-width: 600px)': {    
        fontSize: fontSize.small,
        // width: fontSize.insane
      },

      '@media (min-width: 900px)': {    
        fontSize: fontSize.big,
        // width: fontSize.gaia
      }
  },

  titleSelected: {
    backgroundColor: color.selected
  }
};

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isFadeIn: false
    };

    this.clickCount = 0;
    this.timeout = ''; 
  }

  render() {
    let containerStyle=styles.container; 
 
    if (this.props.isToday) {
      containerStyle=styles.containerToday;
    }

    return (
      <RadiumLink style={containerStyle} to={this.props.target}>
         <div style={styles.folderContainer}>
           <div style={styles.iconContainer}>
              <FolderIcon style={styles.icon} />
           </div>
         </div>
         <div style={styles.title}>
             {this.props.children}
         </div>
      </RadiumLink>
    );
  }
  
  fadeIn() {
    this.setState({
      isFadeIn: true
    });
  }
}

export default Radium(Folder);