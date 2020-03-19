import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.sass';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Main from './components/pages/Main';
import Team from './components/pages/Team';
import Ship from './components/pages/Ship';
import Oneliners from './components/pages/Oneliners';
import Pictures from './components/pages/Pictures';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AuthenticatedComponent from './components/AuthenticatedComponent';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route
                exact
                path="/"
                component={Login}
                login={this.login}
              />
              <Route path="/register" component={Register} />
              <AuthenticatedComponent>
                <Route path="/space" component={Header} />
                <Route path="/space/about" component={About} />
                <Route path="/space/main" component={Main} />
                <Route path="/space/team" component={Team} />
                <Route path="/space/ship" component={Ship} />
                <Route path="/space/pictures" component={Pictures} />
                <Route path="/space/oneliners" component={Oneliners} />
              </AuthenticatedComponent>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
