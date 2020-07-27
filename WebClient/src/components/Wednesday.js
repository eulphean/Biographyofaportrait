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
    justifyContent: 'center'
  }
};

const Wednesday = () => {
  let curHistory = useHistory(); 

  return (
    <div style={styles.container}>
      <Folder 
        history={curHistory}
        target={'/Thursday'}>
        THURSDAY
      </Folder>
    </div>
  );
}

// class Wednesday extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={

//     };

//   }

//   render() {
//     return (
//       <div style={styles.container}>
//         <Folder target={'/Thursday'}>
//           THURSDAY
//         </Folder>
//       </div>
//     );
//   }
// }

export default Radium(Wednesday);