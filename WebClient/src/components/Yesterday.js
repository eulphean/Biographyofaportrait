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

const Yesterday = () => {
  let curHistory = useHistory(); 

  return (
    <div style={styles.container}>
      <Folder 
        history={curHistory}
        target={'/Monday'}>
        MONDAY
      </Folder>
    </div>
  );
}

// class Yesterday extends React.Component {
//   constructor(props) {
// super(props);
//     this.state={

//     };
//   }

//   render() {
//     return (
//       <div style={styles.container}>
//         <Folder target={'/Monday'}>
//           MONDAY
//         </Folder>
//       </div>
//     );
//   }
// }

export default Radium(Yesterday);