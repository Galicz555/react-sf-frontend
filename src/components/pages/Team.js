import React, { Component } from 'react';
import Axios from 'axios';
import propTypes from 'prop-types';
import person from '../../model/person';

export default class Team extends Component {
  hero;

  constructor(props) {
    super(props);

    this.state = {
      hero: {},
      username: '',
      password: ''
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentDidMount(){
    Axios.get('http://localhost:5000/hero/Zeth', {
      headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
    })
      .then(res =>
        this.setState({
          hero: res.data[0]
        })
      )
      .catch(err => {
        console.log(err);
      });
  }

  submit(e) {
    e.preventDefault();
    Axios.post('http://localhost:5000/hero:name', {
      username: this.state.username,
      password: this.state.password
    }).catch(err => alert('Something went wrong'));
  }



  render() {
    return <div>{this.state.hero.charname}</div>;
  }
}

// Team.propTypes = {
//   hero: propTypes.person
// };
