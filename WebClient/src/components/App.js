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
import { Link } from 'react-router-dom'

const RadiumLink = Radium(Link);

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
    this.state = {
      showVideoCanvas: false,
      vid: '',
      target: ''
    }; 

    this.videoRef = React.createRef(); 
  }

  render() {
    return (
      <div style={styles.container}>
        <img style={styles.graph} alt='graph' src={graph} />
        <Router>
          <RadiumLink to="/">
            <VideoCanvas 
              ref={this.videoRef}
              src={this.state.vid} />
          </RadiumLink>
          <Switch>
            <Route path="/Monday">
              <Monday 
                setupVideo={this.setupVideo.bind(this)}
                removeVideo={this.removeVideo.bind(this)} />
            </Route>
            <Route path="/Tuesday">
              <Tuesday 
                setupVideo={this.setupVideo.bind(this)}
                removeVideo={this.removeVideo.bind(this)} />
            </Route>
            <Route path="/Wednesday">
              <Wednesday 
                setupVideo={this.setupVideo.bind(this)} 
                removeVideo={this.removeVideo.bind(this)}/>
            </Route>
            <Route path="/Thursday">
              <Thursday 
                setupVideo={this.setupVideo.bind(this)} 
                removeVideo={this.removeVideo.bind(this)} />
            </Route>
            <Route path="/Friday">
              <Friday 
                setupVideo={this.setupVideo.bind(this)}
                removeVideo={this.removeVideo.bind(this)} />
            </Route>
            <Route path="/Saturday">
              <Saturday 
                setupVideo={this.setupVideo.bind(this)} 
                removeVideo={this.removeVideo.bind(this)} />
            </Route>
            <Route path="/Sunday">
              <Sunday 
                setupVideo={this.setupVideo.bind(this)} 
                removeVideo={this.removeVideo.bind(this)}/>
            </Route>
            <Route path="/Tomorrow">
              <Tomorrow setupVideo = {this.setupVideo.bind(this)} />
            </Route>
            <Route path="/Yesterday">
              <Yesterday 
                setupVideo = {this.setupVideo.bind(this)} 
                removeVideo={this.removeVideo.bind(this)} />
            </Route>
            <Route path="/">
              <Today 
                removeVideo = {this.removeVideo.bind(this)} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

  setupVideo(src) {
    this.videoRef.current.showCanvas(src);
    // this.setState({
    //   vid: src
    // }); 
  }

  removeVideo() {
    this.videoRef.current.removeVideo();
  }
}


export default Radium(App);