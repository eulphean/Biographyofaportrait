import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

const RadiumLink = Radium(Link)

const styles = {
  container: {
    position: 'relative',
    width: '50%',
    height: '100px',
    backgroundColor: 'red',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px'
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
        Tomorrow. Click me to go to Tomorrow. 
      </RadiumLink>
    );
  }
}

export default Radium(Banner);