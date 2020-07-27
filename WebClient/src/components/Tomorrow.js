import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'
import TestVideo from '../videos/test.mp4'

const RadiumLink = Radium(Link)

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  video: {
    width: '300px'
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
      <RadiumLink style={styles.container} to="/">
        <video style={styles.video} autoPlay>
          <source src={TestVideo} type={'video/mp4'} />
        </video>
      </RadiumLink>
    );
  }
}

export default Radium(Tomorrow);