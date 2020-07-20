import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

import Banner from './Banner.js'
import CustomButton from './CustomButton.js'

const RadiumLink = Radium(Link)

const styles = {
  container: {
    position: 'relative'
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
        {/* <CustomButton>
            <RadiumLink to="/Yesterday">Yesterday</RadiumLink>
        </CustomButton> */}
      </div>
    );
  }
}

export default Radium(Tomorrow);