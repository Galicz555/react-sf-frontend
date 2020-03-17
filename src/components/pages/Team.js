import React, { Component } from 'react';
import Axios from 'axios';
import propTypes from 'prop-types';
import person from '../../model/person';

export default class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: {},
      id: 1,
      charname: '',
      level: '',
      class: ''
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/hero/1', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
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
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    };
    Axios.put(
      'http://localhost:5000/hero/:id',
      {
        id: this.state.id,
        charname: this.state.charname,
        level: this.state.level
      },
      options
    )
      .then(res =>
        this.setState({
          hero: res.data
        })
      )
      .catch(err => alert('Something went wrong'));
  }

  render() {
    return (
      <div>
        <div>
          <h2>Személyes adatok</h2>
          <form onSubmit={e => this.submit(e)}>
            <div className="form-row">
              <div className="form-group col">
                <label>
                  Karakter neve:
                  <input
                    className="form-control"
                    type="text"
                    name="charname"
                    placeholder={this.state.hero.charname}
                    onChange={e => this.change(e)}
                    value={this.state.charname}
                  />
                </label>
              </div>
              <div className="form-group col">
                <label>
                  Szint:
                  <input
                    className="form-control"
                    type="number"
                    name="level"
                    placeholder={this.state.hero.level}
                    onChange={e => this.change(e)}
                    value={this.state.level}
                  />
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label>
                  Kasztok:
                  <textarea
                    className="form-control notes"
                    name="class"
                    rows="3"
                    placeholder={this.state.hero.class}
                    value={this.state.class}
                    onChange={e => this.change(e)}
                  />
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="xlab">
                <button className="btn btn-primary btn-block" type="submit">
                  Frissítés
                </button>
              </label>
            </div>
          </form>
        </div>

        <div>Karakter név: {this.state.hero.charname}</div>
        <div>Starfinder közösség: {this.state.hero.sfSociety}</div>
        <div>Kaszt: {this.state.hero.class}</div>
        <div>Szint: {this.state.hero.level}</div>
        <div>Faj: {this.state.hero.race}</div>
        <div>Háttér: {this.state.hero.theme}</div>
        <div>Sebesség: {this.state.hero.speed}</div>
        <div>Nem: {this.state.hero.gender}</div>
        <div>Szülőbolygó: {this.state.hero.homeWorld}</div>
        <div>Jellem: {this.state.hero.aligment}</div>
        <div>Vallás: {this.state.hero.diety}</div>
        <div>Játékos neve: {this.state.hero.player}</div>
      </div>
    );
  }
}

// Team.propTypes = {
//   hero: propTypes.person
// };
