import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

const RadiumLink = Radium(Link)

const styles = {
  container: {
    position: 'relative',
    backgroundColor: 'green',
    width: '20%',
    height: '100px'
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
        I am Tomorrow. Click me to go back to the home page. 
     </RadiumLink>
    );
  }
}

export default Radium(Tomorrow);