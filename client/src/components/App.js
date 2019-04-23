import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../store'
import '../styles/base.css'

import Person from './newPerson'
// import Carousel from './carousel'
// import Sanctuary from './sanctuary'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <div className="title">
              <h1>Logan's Fun Run</h1>
              <h2>Take a spin on the Carousel</h2>
              <h4>Must be 30 or older to ride</h4>
            </div>
            <Route exact path="/" component={Person} />
            {/* <Route exact path="/carousel" component={Carousel} /> */}
            {/* <Route exact path="/sanctuary" component={Sanctuary} /> */}
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
