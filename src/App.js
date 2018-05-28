import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import NavMenu from './components/NavMenu/NavMenu'
import Main from './components/Main/Main'

class App extends Component {

  state = {
    renderSection: ""
  }



  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavMenu />
          <Switch>
            <Route path="/" exact />
            <Route component={Main} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
