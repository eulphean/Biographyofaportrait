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
    zIndex: '99',
    WebkitTapHighlightColor: 'transparent'
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
    display: 'flex',
    justifyContent: 'center'
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
      // backgroundColor: color.darkGrey,
      color: color.lightGrey,
      // padding: padding.extraSmall,
      paddingLeft: padding.lessBig,
      paddingRight: padding.lessBig,
      fontFamily: fontFamily.helvetica,
      letterSpacing: '1px',
      zIndex: '2',
      paddingTop: padding.extraSmall,

      // Default
      fontSize: fontSize.verySmall,
      // width: fontSize.extraMassive,

      '@media (min-width: 600px)': {    
        fontSize: fontSize.small,
        // width: fontSize.insane
      },

      '@media (min-width: 900px)': {    
        fontSize: fontSize.small,
        // width: fontSize.gaia
      }
  },

  titleToday: {
    color: color.yesterdayGrey
  },

  outline: {
    WebkitTextStroke: '0.5px #b3b3b3',
  },

  blurred: {
    position: 'absolute',
    bottom: '0px',
    height: '20%',
    width: '80%',
    opacity: '75%',
    backgroundColor: 'white',
    zIndex: '-1'
  },

  center: {
    display: 'flex',
    justifyContent: 'center'
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

    let blurred = this.props.isToday ? <div style={styles.blurred} /> : (
      (React.Null)
    ); 

    let titleStyle = this.props.isToday ? [styles.title, styles.titleToday] : styles.title;

    return (
      <div style={containerStyle} onClick={this.onClick.bind(this)}>
        <RadiumLink to={this.props.target}>
          <div style={styles.folderContainer}>
            <div style={styles.iconContainer}>
                <FolderIcon style={styles.icon} />
            </div>
          </div>
          <div style={styles.center}>
            <div style={titleStyle}>
                {this.props.children}
            </div>
            { blurred }
          </div>
       </RadiumLink>
      </div>
    );
  }
  
  fadeIn() {
    this.setState({
      isFadeIn: true
    });
  }

  onClick(event) {
    event.stopPropagation();
    if (this.props.onClick) {
      this.props.onClick(); 
    } 
  }
}

export default Radium(Folder);