import React from 'react'
import Radium from 'radium'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { withOrientationChange } from 'react-device-detect'
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

const App = (props) => {
  const { isLandscape, isPortrait } = props; 
  let videoRef = React.createRef(); 

  return (
    <div style={styles.container}>
      <img style={styles.graph} alt='graph' src={graph} />
      <Router>
          <VideoCanvas 
            ref={videoRef}
            src={''} />
        <Switch>
          <Route path="/Monday">
            <Monday 
              setupVideo={setupVideo.bind(this)}
              removeVideo={removeVideo.bind(this)} 
              isLandscape = { isLandscape } 
              isPortrait = { isPortrait } />
          </Route>
          <Route path="/Tuesday">
            <Tuesday 
              setupVideo={setupVideo.bind(this)}
              removeVideo={removeVideo.bind(this)} 
              isLandscape = { isLandscape } 
              isPortrait = { isPortrait } />
          </Route>
          <Route path="/Wednesday">
            <Wednesday 
              setupVideo={setupVideo.bind(this)} 
              removeVideo={removeVideo.bind(this)}
              isLandscape = { isLandscape } 
              isPortrait = { isPortrait } />
          </Route>
          <Route path="/Thursday">
            <Thursday 
              setupVideo={setupVideo.bind(this)} 
              removeVideo={removeVideo.bind(this)} 
              isLandscape = { isLandscape } 
              isPortrait = { isPortrait } />
          </Route>
          <Route path="/Friday">
            <Friday 
              setupVideo={setupVideo.bind(this)}
              removeVideo={removeVideo.bind(this)} 
              isLandscape = { isLandscape } 
              isPortrait = { isPortrait } />
          </Route>
          <Route path="/Saturday">
            <Saturday 
              setupVideo={setupVideo.bind(this)} 
              removeVideo={removeVideo.bind(this)} 
              isLandscape = { isLandscape } 
              isPortrait = { isPortrait } />
          </Route>
          <Route path="/Sunday">
            <Sunday 
              setupVideo={setupVideo.bind(this)} 
              removeVideo={removeVideo.bind(this)} 
              isLandscape = { isLandscape } 
              isPortrait = { isPortrait } />
          </Route>
          <Route path="/Tomorrow">
            <Tomorrow 
              setupVideo = {setupVideo.bind(this)} 
              isPortrait = { isPortrait }
              isLandscape = { isLandscape }
            />
          </Route>
          <Route path="/Yesterday">
            <Yesterday 
              setupVideo = {setupVideo.bind(this)} 
              removeVideo = {removeVideo.bind(this)} 
              isLandscape = { isLandscape } 
              isPortrait = { isPortrait } />
          </Route>
          <Route path="/">
            <Today 
              removeVideo = {removeVideo.bind(this)} />
          </Route>
        </Switch>
      </Router>
    </div>
  );


  function setupVideo(src, target) {
    videoRef.current.showCanvas(src, target);
  }

  function removeVideo() {
    videoRef.current.removeVideo();
  }
}
export default Radium(withOrientationChange(App));