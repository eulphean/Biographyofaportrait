import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'
import vid from '../videos/testPortrait.mp4'
import VideoCanvas from './VideoCanvas.js'

const RadiumLink = Radium(Link)

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  video: {
    zIndex: '2',
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
        <VideoCanvas src={vid} />
      </RadiumLink>
    );
  }
}

export default Radium(Tomorrow);