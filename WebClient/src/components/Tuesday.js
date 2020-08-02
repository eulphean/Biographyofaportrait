import React from 'react'
import Radium from 'radium'

import { useHistory } from 'react-router-dom'
import Folder from './Folder'

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh'
  }
};

const Tuesday = () => {
  let curHistory = useHistory(); 

  return (
    <div style={styles.container}>
      <Folder 
        history={curHistory}
        visible={true}
        target={'/Wednesday'}>
        WEDNESDAY
      </Folder>
    </div>
  );
}

// class Tuesday extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={

//     };

//   }

//   render() {
//     return (
//       <div style={styles.container}>
//         <Folder target={'/Wednesday'}>
//           WEDNESDAY
//         </Folder>
//       </div>
//     );
//   }
// }

export default Radium(Tuesday);