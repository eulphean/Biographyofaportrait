import React from 'react'
import Radium from 'radium'

import Banner from './Banner.js'
import Folder from './Folder.js'
import { ReactComponent as User } from '../svg/banda.svg'
import { padding, color } from './CommonStyles.js'
import Popup from './Popup.js'

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',

    '@media (min-width: 768px)': {  
      marginLeft: padding.enourmous,
      marginRight: padding.enourmous,
    },
  },

  user: {
    position: 'fixed',
    width: '120vw',
    bottom: '-5%',
    overflow:'none',

    '@media (min-width: 450px)': {  
      // no change.
      width: '100vw',
      bottom: '-15%'
    },

    '@media (min-width: 600px)': {  
    },

    '@media (min-width: 700px)': {  
      width: '80vw',
      bottom: '-10%'
    },

    '@media (min-width: 900px)': {  
      width: '70vw',
      bottom: '-20%'
    },

    '@media (min-width: 1200px)': {  
      width: '60vw',
      bottom: '-25%'
    },


    '@media (min-width: 1500px)': {  
      width: '60vw',
      bottom: '-25%'
    }
  },

  icon: {
    width: '100%',
    height: '100%',
    fill: color.lightGrey
  },

  folder: {
    position: 'fixed',
    bottom: '5%',
    right: '5%'
  }
};

class Tomorrow extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };

    this.popupRef = React.createRef(); 

  }

  render() {
    return (
      <div style={styles.container}>
        <Banner 
          onClickInfo={this.handleInfoClick.bind(this)}
        />
        <div style={styles.user}>
          <User style={styles.icon}/>
        </div>
        <div style={styles.folder}>
          <Folder target={'/Yesterday'}>
            YESTERDAY
          </Folder>
        </div>
        <Popup 
          ref={this.popupRef}
          type={this.state.popupType}
        />
      </div>
    );
  }

  handleInfoClick() {
    this.popupRef.current.showPopup(); 
  }
}

export default Radium(Tomorrow);