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

const Saturday = () => {
  let curHistory = useHistory(); 

  return (
    <div style={styles.container}>
      <Folder 
        history={curHistory}
        target={'/Sunday'}>
        SUNDAY
      </Folder>
    </div>
  );
}

// class Saturday extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={

//     };
//   }

//   render() {
//     return (
//       <div style={styles.container}>
//         <Folder target={'/Sunday'}>
//           SUNDAY
//         </Folder>
//       </div>
//     );
//   }
// }

export default Radium(Saturday);