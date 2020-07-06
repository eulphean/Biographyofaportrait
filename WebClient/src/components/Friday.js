import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'
import CustomButton from './CustomButton'

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

class Friday extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };

  }

  render() {
    return (
      <div style={styles.container}>
        I am Friday
        <CustomButton>
            <RadiumLink to="/Saturday">Saturday</RadiumLink>
        </CustomButton>
      </div>
    );
  }
}

export default Radium(Friday);