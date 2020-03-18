import React, { Component } from 'react';
import Axios from 'axios';
import propTypes from 'prop-types';
import person from '../../model/person';

export default class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      charname: '',
      sfSociety: '',
      level: '',
      class: '',
      race: '',
      theme: ''
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
      .then(res => this.setState(res.data[0]))
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
        sfSociety: this.state.sfSociety,
        level: this.state.level,
        race: this.state.race,
        theme: this.state.theme,
        speed: this.state.speed
      },
      options
    )
      .then(res => this.setState(res.data))
      .catch(err => alert('Something went wrong'));
  }

  render() {
    return (
      <div>
        <div>
          <h2>Személyes adatok</h2>
          <form className="charSheet" onSubmit={e => this.submit(e)}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>
                  Karakter neve:
                  <input
                    className="form-control"
                    type="text"
                    name="charname"
                    placeholder={this.state.charname}
                    onChange={e => this.change(e)}
                    value={this.state.charname}
                  />
                </label>
              </div>
              <div className="form-group col-md-1 col-sm-2">
                <label>
                  Szint:
                  <input
                    className="form-control"
                    type="number"
                    name="level"
                    placeholder={this.state.level}
                    onChange={e => this.change(e)}
                    value={this.state.level}
                  />
                </label>
              </div>
              <div className="form-group col-md-5 col-sm-10">
                <label>
                  Starfinder közösség:
                  <input
                    className="form-control"
                    type="text"
                    name="sfSociety"
                    placeholder={this.state.sfSociety}
                    onChange={e => this.change(e)}
                    value={this.state.sfSociety}
                  />
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-sm">
                <label>
                  Kasztok:
                  <textarea
                    className="form-control notes"
                    name="class"
                    rows="1"
                    placeholder={this.state.class}
                    value={this.state.class}
                    onChange={e => this.change(e)}
                  />
                </label>
              </div>
              {/* <div className="form-group -sm">
                Speed:
                <div>{this.state.speed}</div>
              </div> */}
              <div className="form-group col-sm">
                <label>
                  Háttér:
                  <input
                    className="form-control"
                    type="text"
                    name="theme"
                    placeholder={this.state.theme}
                    onChange={e => this.change(e)}
                    value={this.state.theme}
                  />
                </label>
              </div>
              <div className="form-group col-sm">
                <label>
                  Faj:
                  <input
                    className="form-control"
                    type="text"
                    name="race"
                    placeholder={this.state.race}
                    onChange={e => this.change(e)}
                    value={this.state.race}
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

        <div>Karakter név: {this.state.charname}</div>
        <div>Starfinder közösség: {this.state.sfSociety}</div>
        <div>Kaszt: {this.state.class}</div>
        <div>Szint: {this.state.level}</div>
        <div>Faj: {this.state.race}</div>
        <div>Háttér: {this.state.theme}</div>
        <div>Sebesség: {this.state.speed}</div>
        <div>Nem: {this.state.gender}</div>
        <div>Szülőbolygó: {this.state.homeWorld}</div>
        <div>Jellem: {this.state.aligment}</div>
        <div>Vallás: {this.state.diety}</div>
        <div>Játékos neve: {this.state.player}</div>
      </div>
    );
  }
}

// Team.propTypes = {
//   hero: propTypes.person
// };
