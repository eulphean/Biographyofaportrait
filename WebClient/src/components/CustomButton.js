import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    position: 'relative',
    backgroundColor: '#c1d8f0',
    color: 'black',
    padding: '10px',
    marginTop: '20px'
  }
};

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };
  }

  render() {
    return (
      <button style={styles.container}>
        {this.props.children}
      </button>
    );
  }
}

export default Radium(CustomButton);