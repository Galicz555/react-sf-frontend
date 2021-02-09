import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.sass';
import AuthenticatedComponent from './components/AuthenticatedComponent';
import { Provider } from 'react-redux';
import store from './store';

const main = lazy(() => import('./components/pages/Main'));
const header = lazy(() => import('./components/layout/Header'));
const about = lazy(() => import('./components/pages/About'));
const team = lazy(() => import('./components/pages/Team'));
const ship = lazy(() => import('./components/pages/Ship'));
const oneLiners = lazy(() => import('./components/pages/Oneliners'));
const pictures = lazy(() => import('./components/pages/Pictures'));
const login = lazy(() => import('./components/pages/Login'));
const register = lazy(() => import('./components/pages/Register'));
const renderLoader = () => <p>Loading</p>;

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
        <Suspense fallback={renderLoader()}>
          <div className="App">
            <Switch>
              <Route
                exact
                path="/"
                component={login}
                login={this.login}
              />
              <Route path="/register" component={register} />
              <AuthenticatedComponent>
                <Route path="/space" component={header} />
                <Route path="/space/about" component={about} />
                <Route path="/space/main" component={main} />
                <Route path="/space/team" component={team} />
                <Route path="/space/ship" component={ship} />
                <Route path="/space/pictures" component={pictures} />
                <Route path="/space/oneliners" component={oneLiners} />
              </AuthenticatedComponent>
            </Switch>
          </div>
          </Suspense>
        </Router>
      </Provider>
    );
  }
}

export default App;
