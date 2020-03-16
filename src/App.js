import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Todos } from './components/Todos';
// import AddTodo from './components/AddTodo';
// import About from './components/pages/About';
import './App.sass';
// import Header from './components/layout/Header';
// import { v4 as uuidv4 } from 'uuid';
// import Axios from 'axios';
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

// const url = 'http://localhost:5000/';
class App extends Component {
  state = {
    // todos: []
  };

  // componentDidMount() {
  //   Axios.get(
  //     'https://jsonplaceholder.typicode.com/todos?_limit=10'
  //   ).then(res => this.setState({ todos: res.data }));
  // }

  // // toggle complete
  // markComplete = id => {
  //   this.setState({
  //     todos: this.state.todos.map(todo => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed;
  //       }
  //       return todo;
  //     })
  //   });
  // };

  // // Delete todo
  // delTodo = id => {
  //   Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
  //     this.setState({
  //       todos: [...this.state.todos.filter(todo => todo.id !== id)]
  //     })
  //   );
  // };

  // add todo
  // login = (username, password) => {
  //   Axios.post(`${url}login`, {
  //     username,
  //     password
  //   }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  // };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              component={Login}
              login={this.login}
              // render={props => (
              //   <React.Fragment>
              //     <AddTodo addTodo={this.addTodo} />
              //       <Todos
              //         todos={this.state.todos}
              //         markComplete={this.markComplete}
              //         delTodo={this.delTodo}
              //     />
              //   </React.Fragment>
              // )}
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
    );
  }
}

export default App;
