import React from 'react'
import Radium from 'radium'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Today from './Today.js'
import Yesterday from './Yesterday.js'
import Tomorrow from './Tomorrow.js'
import Monday from './Monday.js'
import Tuesday from './Tuesday.js'
import Wednesday from './Wednesday.js'
import Thursday from './Thursday.js'
import Friday from './Friday.js'
import Saturday from './Saturday.js'
import Sunday from './Sunday.js'
import graph from '../images/graph_rotate.jpg'
import VideoCanvas from './VideoCanvas.js'

const styles = {
  container: {
    position: 'fixed',
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black'
  },

  graph: {
    position: 'absolute',
    objectFit: 'cover',
    height: '100vh',
    width: '100vw',
    zIndex: '1'
  }
};

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.videoRef = React.createRef(); 
    console.log('Version: ' + '2');
    window.addEventListener('resize', this.handleResize.bind(this));
    this.state = {
      isLandscape: this.isLandscape(),
      isPortrait: this.isPortrait()
    }; 
  }

  render() {
    return (
      <div style={styles.container}>
        <img style={styles.graph} alt='graph' src={graph} />
        <Router>
            <VideoCanvas 
              ref={this.videoRef}
              src={''} />
          <Switch>
            <Route path="/Monday">
              <Monday 
                setupVideo={this.setupVideo.bind(this)}
                removeVideo={this.removeVideo.bind(this)} 
                isLandscape={this.state.isLandscape} 
                isPortrait={this.state.isPortrait} />
            </Route>
            <Route path="/Tuesday">
              <Tuesday 
                setupVideo={this.setupVideo.bind(this)}
                removeVideo={this.removeVideo.bind(this)} 
                isLandscape={this.state.isLandscape} 
                isPortrait={this.state.isPortrait} />
            </Route>
            <Route path="/Wednesday">
              <Wednesday 
                setupVideo={this.setupVideo.bind(this)} 
                removeVideo={this.removeVideo.bind(this)}
                isLandscape={this.state.isLandscape} 
                isPortrait={this.state.isPortrait} />
            </Route>
            <Route path="/Thursday">
              <Thursday 
                setupVideo={this.setupVideo.bind(this)} 
                removeVideo={this.removeVideo.bind(this)} 
                isLandscape={this.state.isLandscape} 
                isPortrait={this.state.isPortrait} />
            </Route>
            <Route path="/Friday">
              <Friday 
                setupVideo={this.setupVideo.bind(this)}
                removeVideo={this.removeVideo.bind(this)} 
                isLandscape={this.state.isLandscape} 
                isPortrait={this.state.isPortrait} />
            </Route>
            <Route path="/Saturday">
              <Saturday 
                setupVideo={this.setupVideo.bind(this)} 
                removeVideo={this.removeVideo.bind(this)} 
                isLandscape={this.state.isLandscape} 
                isPortrait={this.state.isPortrait} />
            </Route>
            <Route path="/Sunday">
              <Sunday 
                setupVideo={this.setupVideo.bind(this)} 
                removeVideo={this.removeVideo.bind(this)} 
                isLandscape={this.state.isLandscape} 
                isPortrait={this.state.isPortrait} />
            </Route>
            <Route path="/Tomorrow">
              <Tomorrow 
                setupVideo={this.setupVideo.bind(this)} 
                removeVideo={this.removeVideo.bind(this)}
                isPortrait={this.state.isPortrait}
                isLandscape={this.state.isLandscape}
              />
            </Route>
            <Route path="/Yesterday">
              <Yesterday 
                setupVideo={this.setupVideo.bind(this)} 
                removeVideo={this.removeVideo.bind(this)} 
                isLandscape={this.state.isLandscape} 
                isPortrait={this.state.isPortrait} />
            </Route>
            <Route path="/">
              <Today 
                isLandscape={this.state.isLandscape}
                isPortrait={this.state.isPortrait}
                removeVideo={this.removeVideo.bind(this)} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

  setupVideo(src, target) {
    this.videoRef.current.showCanvas(src, target);
  }

  removeVideo() {
    this.videoRef.current.removeVideo();
  }

  handleResize() {
    console.log('Window Resized');
    this.setState({
      isLandscape: this.isLandscape(),
      isPortrait: this.isPortrait()
    });
  }

  isLandscape() {
    return (window.matchMedia("(orientation: landscape").matches); 
  }

  isPortrait() {
    return (window.matchMedia("(orientation: portrait").matches);
  }
}

export default Radium(App);


// const App = (props) => {
//   const { isLandscape, isPortrait } = props; 
//   let videoRef = React.createRef(); 

//   return (
//     <div style={styles.container}>
//       <Orientation />
//       <img style={styles.graph} alt='graph' src={graph} />
//       <Router>
//           <VideoCanvas 
//             ref={videoRef}
//             src={''} />
//         <Switch>
//           <Route path="/Monday">
//             <Monday 
//               setupVideo={setupVideo.bind(this)}
//               removeVideo={removeVideo.bind(this)} 
//               isLandscape = { isLandscape } 
//               isPortrait = { isPortrait } />
//           </Route>
//           <Route path="/Tuesday">
//             <Tuesday 
//               setupVideo={setupVideo.bind(this)}
//               removeVideo={removeVideo.bind(this)} 
//               isLandscape = { isLandscape } 
//               isPortrait = { isPortrait } />
//           </Route>
//           <Route path="/Wednesday">
//             <Wednesday 
//               setupVideo={setupVideo.bind(this)} 
//               removeVideo={removeVideo.bind(this)}
//               isLandscape = { isLandscape } 
//               isPortrait = { isPortrait } />
//           </Route>
//           <Route path="/Thursday">
//             <Thursday 
//               setupVideo={setupVideo.bind(this)} 
//               removeVideo={removeVideo.bind(this)} 
//               isLandscape = { isLandscape } 
//               isPortrait = { isPortrait } />
//           </Route>
//           <Route path="/Friday">
//             <Friday 
//               setupVideo={setupVideo.bind(this)}
//               removeVideo={removeVideo.bind(this)} 
//               isLandscape = { isLandscape } 
//               isPortrait = { isPortrait } />
//           </Route>
//           <Route path="/Saturday">
//             <Saturday 
//               setupVideo={setupVideo.bind(this)} 
//               removeVideo={removeVideo.bind(this)} 
//               isLandscape = { isLandscape } 
//               isPortrait = { isPortrait } />
//           </Route>
//           <Route path="/Sunday">
//             <Sunday 
//               setupVideo={setupVideo.bind(this)} 
//               removeVideo={removeVideo.bind(this)} 
//               isLandscape = { isLandscape } 
//               isPortrait = { isPortrait } />
//           </Route>
//           <Route path="/Tomorrow">
//             <Tomorrow 
//               setupVideo = {setupVideo.bind(this)} 
//               removeVideo = {removeVideo.bind(this)}
//               isPortrait = { isPortrait }
//               isLandscape = { isLandscape }
//             />
//           </Route>
//           <Route path="/Yesterday">
//             <Yesterday 
//               setupVideo = {setupVideo.bind(this)} 
//               removeVideo = {removeVideo.bind(this)} 
//               isLandscape = { isLandscape } 
//               isPortrait = { isPortrait } />
//           </Route>
//           <Route path="/">
//             <Today 
//               isLandscape = { isLandscape }
//               isPortrait = { isPortrait }
//               removeVideo = {removeVideo.bind(this)} />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );