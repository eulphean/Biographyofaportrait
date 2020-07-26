import React from 'react'
import Radium from 'radium'
import Folder from './Folder'

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

class Wednesday extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };

  }

  render() {
    return (
      <div style={styles.container}>
        <Folder target={'/Thursday'}>
          THURSDAY
        </Folder>
      </div>
    );
  }
}

export default Radium(Wednesday);