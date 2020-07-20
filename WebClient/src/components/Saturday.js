import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'
import Folder from './Folder'

const RadiumLink = Radium(Link)

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

class Saturday extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };
  }

  render() {
    return (
      <div style={styles.container}>
        <Folder target={'/Sunday'}>
          SUNDAY
        </Folder>
      </div>
    );
  }
}

export default Radium(Saturday);