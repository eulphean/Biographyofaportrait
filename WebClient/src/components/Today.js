import React from 'react'
import Radium from 'radium'

import Banner from './Banner.js'
import Folder from './Folder.js'
import { ReactComponent as User } from '../svg/banda.svg'
import { padding, color } from './CommonStyles.js'
import Popup from './Popup.js'
import { useHistory } from 'react-router-dom'

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
    zIndex: '95',
    position: 'fixed',
    width: '100vw',
    bottom: '-10%',
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
    zIndex: 99,
    position: 'fixed',
    bottom: '5%',
    right: '5%'
  }
};

const Tomorrow = () => {
    let popupRef = React.createRef(); 
    let folderRef = React.createRef();
    let curHistory = useHistory(); 

    return (
      <div onClick={handleScreenClick.bind(this)} style={styles.container}>
        <Banner 
          onClickInfo={handleInfoClick.bind(this)}
        />
        <div style={styles.user}>
          <User style={styles.icon}/>
        </div>
        <div style={styles.folder}>
          <Folder 
            ref={folderRef} 
            target={'/Yesterday'}
            history={curHistory}
          >
            YESTERDAY
          </Folder>
        </div>
        <Popup 
          ref={popupRef}
        />
      </div>
    );


    function handleScreenClick(event) {
      event.stopPropagation(); 
      // if the folder is selected, deSelect it. 
      let isSelected = folderRef.current.isSelected; 
      if (isSelected) {
         folderRef.current.deSelect(); 
      }
    }

    function handleInfoClick() {
      popupRef.current.showPopup(); 
    }
}

// class Tomorrow extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={

//     };

//     this.popupRef = React.createRef(); 
//     this.folderRef = React.createRef(); 
//   }

//   render() {
   
//   }

//   handleScreenClick(event) {
//     event.stopPropagation(); 
//     // if the folder is selected, deSelect it. 
//     let isSelected = this.folderRef.current.isSelected; 
//     if (isSelected) {
//       this.folderRef.current.deSelect(); 
//     }
//   }

//   handleInfoClick() {
//     this.popupRef.current.showPopup(); 
//   }
// }

export default Radium(Tomorrow);