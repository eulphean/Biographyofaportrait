import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'
import vid from '../videos/testPortrait.mp4'

const RadiumLink = Radium(Link)

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  video: {
    objectFit: 'cover',
    height: '100vh'
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
        <video style={styles.video} autoPlay loop>
          <source src={vid} type={'video/mp4'} />
        </video>
      </RadiumLink>
    );
  }
}

export default Radium(Tomorrow);