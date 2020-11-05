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
      vid: {}
    }; 
  }

  render() {
    return (
      <div style={styles.container}>
        <img style={styles.graph} alt='graph' src={graph} />
        <Router>
          <Switch>
            <Route path="/Monday">
              <Monday />
            </Route>
            <Route path="/Tuesday">
              <Tuesday />
            </Route>
            <Route path="/Wednesday">
              <Wednesday />
            </Route>
            <Route path="/Wednesday">
              <Wednesday />
            </Route>
            <Route path="/Thursday">
              <Thursday />
            </Route>
            <Route path="/Friday">
              <Friday />
            </Route>
            <Route path="/Saturday">
              <Saturday />
            </Route>
            <Route path="/Sunday">
              <Sunday />
            </Route>
            <Route path="/Tomorrow">
              <Tomorrow />
            </Route>
            <Route path="/Yesterday">
              <Yesterday />
            </Route>
            <Route path="/">
              <Today />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}


export default Radium(App);