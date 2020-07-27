import React from 'react'
import Radium from 'radium'

import { useHistory } from 'react-router-dom'
import Folder from './Folder.js'

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const Monday = () => {
  let curHistory = useHistory(); 

  return (
    <div style={styles.container}>
      <Folder 
        history={curHistory}
        target={'/Tuesday'}>
        TUESDAY
      </Folder>
    </div>
  );
}

// class Monday extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={

//     };

//   }

//   render() {
//     return (
//       <div style={styles.container}>
//         <Folder target={'/Tuesday'}>
//           TUESDAY
//         </Folder>
//       </div>
//     );
//   }
// }

export default Radium(Monday);