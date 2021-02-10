import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { fetchId } from '../../actions/idActions';
import propTypes from 'prop-types';
import person from '../../model/person';

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      charname: '',
      sfSociety: '',
      level: '',
      class: '',
      race: '',
      gender: '',
      theme: '',
      homeWorld: '',
      aligment: '',
      diety: '',
      player: ''
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
    this.props.fetchId();
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    };

    Axios.get(`http://localhost:5000/heroes/${this.props.userId}`, options)
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
      'http://localhost:5000/hero',
      {
        userId: this.state.userId,
        charname: this.state.charname,
        sfSociety: this.state.sfSociety,
        level: this.state.level,
        race: this.state.race,
        gender: this.state.gender,
        theme: this.state.theme,
        homeWorld: this.state.homeWorld,
        aligment: this.state.aligment,
        diety: this.state.diety,
        player: this.state.player,
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

          <div className="form-row">
            <div className="form-group col-sm">
              <label>
                Nem:
                <input
                  className="form-control"
                  name="gender"
                  placeholder={this.state.gender}
                  value={this.state.gender}
                  onChange={e => this.change(e)}
                />
              </label>
            </div>
            <div className="form-group col-sm">
              <label>
                Szülőbolygó:
                <input
                  className="form-control"
                  type="text"
                  name="homeWorld"
                  placeholder={this.state.homeWorld}
                  onChange={e => this.change(e)}
                  value={this.state.homeWorld}
                />
              </label>
            </div>
            <div className="form-group col-sm">
              <label>
                Jellem:
                <input
                  className="form-control"
                  type="text"
                  name="aligment"
                  placeholder={this.state.aligment}
                  onChange={e => this.change(e)}
                  value={this.state.aligment}
                />
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-sm">
              <label>
                Vallás:
                <input
                  className="form-control"
                  name="diety"
                  placeholder={this.state.diety}
                  value={this.state.diety}
                  onChange={e => this.change(e)}
                />
              </label>
            </div>
            <div className="form-group col-sm">
              <label>
                Játékos neve:
                <input
                  className="form-control"
                  type="text"
                  name="player"
                  placeholder={this.state.player}
                  onChange={e => this.change(e)}
                  value={this.state.player}
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
        <div>lol{this.props.userId}</div>
      </div>
    );
  }
}

// Team.propTypes = {
//   hero: propTypes.person
// };

const mapStateToProps = state => ({
  userId: state.userId.item
})

export default connect(mapStateToProps, { fetchId })(Team)