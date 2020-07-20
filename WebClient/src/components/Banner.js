import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

// Styles
import { fontFamily, color, fontSize, padding } from './CommonStyles.js'
import clouds from '../images/banner.jpg'
import { ReactComponent as Cloud } from '../svg/cloud.svg'
import { ReactComponent as Close } from '../svg/close.svg'

const RadiumLink = Radium(Link)

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
    paddingLeft: padding.tiny
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

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: padding.tiny,
    backgroundColor: color.darkGrey,
    width: fontSize.extraSmall,
    height: fontSize.extraSmall,
    position: 'absolute',
    right: '2%',
    top: '10%'
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

    };
  }

  render() {
    return (
      <RadiumLink style={styles.container} to="/Tomorrow">
       <div style={styles.banner}>
         <div style={styles.glimpse}>
            <div style={styles.glimpseText}>
              glimpse here
            </div>
            <Cloud style={styles.icon}/>
         </div>
         <div style={styles.close}>
           <Close style={styles.icon} />
         </div>
         <div style={styles.tomorrow}>
           TOMORROW<sup style={styles.tomorrowSuper}>TM</sup>
         </div>
       </div>
       <img style={styles.clouds} alt={'clouds'} src={clouds} />
      </RadiumLink>
    );
  }
}

export default Radium(Banner);