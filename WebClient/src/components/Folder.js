import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

import { ReactComponent as FolderIcon } from '../svg/folder.svg'
import { fontSize, color, padding, fontFamily } from './CommonStyles.js'

const RadiumLink = Radium(Link)

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  folder: {
    width: fontSize.extraMassive
  },

  icon: {
      width: '100%',
      height: '100%'
  },

  title: {
      backgroundColor: color.darkGrey,
      color: color.lightGrey,
      padding: padding.extraSmall,
      fontSize: fontSize.verySmall,
      fontFamily: fontFamily.opensansregular
  }
};

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };

  }

  render() {
    return (
     <RadiumLink style={styles.container} to={this.props.target}>
         <div style={styles.folder}>
            <FolderIcon style={styles.icon} />
         </div>
         <div style={styles.title}>
             {this.props.children}
         </div>
      </RadiumLink>
    );
  }
}

export default Radium(Folder);