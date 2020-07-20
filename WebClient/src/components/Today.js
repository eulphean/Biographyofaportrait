import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

import Banner from './Banner.js'
import CustomButton from './CustomButton.js'
import { ReactComponent as User } from '../svg/banda.svg'
import { color } from './CommonStyles.js'

const RadiumLink = Radium(Link)

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },

  user: {
    position: 'fixed',
    width: '350px',
    bottom: '-3%'
  },

  icon: {
    width: '100%',
    height: '100%',
    fill: color.lightGrey
  }
};

class Tomorrow extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };

  }

  render() {
    return (
      <div style={styles.container}>
        <Banner />
        <div style={styles.user}>
          <User style={styles.icon}/>
        </div>
        {/* <CustomButton>
            <RadiumLink to="/Yesterday">Yesterday</RadiumLink>
        </CustomButton> */}
      </div>
    );
  }
}

export default Radium(Tomorrow);