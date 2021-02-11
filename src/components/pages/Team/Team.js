import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { fetchId } from '../../../actions/idActions';
import './Team.sass';
import propTypes from 'prop-types';
import person from '../../../model/person';

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: 0,
      heroes: [{
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
      player: ''}]
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(element) {
    const checkKey = element.target.name
    const checkValue = element.target.value
    this.setState(prevState => ({
      heroes: prevState.heroes.map(
      hero => (Object.assign(hero, { [checkKey]: checkValue }))
    )
  }));
  }

  componentDidMount() {
    this.props.fetchId();
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    };

    Axios.get(`http://localhost:5000/heroes/${this.props.userId}`, options)
      .then(res => {
        this.setState({heroes: res.data})
      })
      .catch(err => {
        console.log(err);
      });
  }

  submit(element) {
    element.preventDefault();
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    };
    Axios.put(
      'http://localhost:5000/hero',
      {
        userId: this.state.heroes[this.state.hero].userId,
        charname: this.state.heroes[this.state.hero].charname,
        sfSociety: this.state.heroes[this.state.hero].sfSociety,
        level: this.state.heroes[this.state.hero].level,
        race: this.state.heroes[this.state.hero].race,
        gender: this.state.heroes[this.state.hero].gender,
        theme: this.state.heroes[this.state.hero].theme,
        homeWorld: this.state.heroes[this.state.hero].homeWorld,
        aligment: this.state.heroes[this.state.hero].aligment,
        diety: this.state.heroes[this.state.hero].diety,
        player: this.state.heroes[this.state.hero].player,
        speed: this.state.heroes[this.state.hero].speed
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
        <form className="charSheet" onSubmit={element => this.submit(element)}>
          <label>
            Karakter neve:
            <input
              type="text"
              name='charname'
              placeholder={this.state.heroes[this.state.hero].charname}
              onChange={element => this.change(element)}
              value={this.state.heroes[this.state.hero].charname}
            />
          </label>
          <label>
            Szint:
            <input
              type="number"
              name="level"
              placeholder={this.state.heroes[this.state.hero].level}
              onChange={element => this.change(element)}
              value={this.state.heroes[this.state.hero].level}
            />
          </label>
          <label>
            Starfinder közösség:
            <input
              type="text"
              name="sfSociety"
              placeholder={this.state.heroes[this.state.hero].sfSociety}
              onChange={element => this.change(element)}
              value={this.state.heroes[this.state.hero].sfSociety}
            />
          </label>

          <label>
            Kasztok:
            <textarea
              className="notes"
              name="class"
              rows="1"
              placeholder={this.state.heroes[this.state.hero].class}
              value={this.state.heroes[this.state.hero].class}
              onChange={element => this.change(element)}
            />
          </label>
          <label>
            Háttér:
            <input
              type="text"
              name="theme"
              placeholder={this.state.heroes[this.state.hero].theme}
              onChange={element => this.change(element)}
              value={this.state.heroes[this.state.hero].theme}
            />
          </label>
          <label>
            Faj:
            <input
              type="text"
              name="race"
              placeholder={this.state.heroes[this.state.hero].race}
              onChange={element => this.change(element)}
              value={this.state.heroes[this.state.hero].race}
            />
          </label>
          <label>
            Nem:
            <input
              name="gender"
              placeholder={this.state.heroes[this.state.hero].gender}
              value={this.state.heroes[this.state.hero].gender}
              onChange={element => this.change(element)}
            />
          </label>
          <label>
            Szülőbolygó:
            <input
              type="text"
              name="homeWorld"
              placeholder={this.state.heroes[this.state.hero].homeWorld}
              onChange={element => this.change(element)}
              value={this.state.heroes[this.state.hero].homeWorld}
            />
          </label>
          <label>
            Jellem:
            <input
              type="text"
              name="aligment"
              placeholder={this.state.heroes[this.state.hero].aligment}
              onChange={element => this.change(element)}
              value={this.state.heroes[this.state.hero].aligment}
            />
          </label>
          <label>
            Vallás:
            <input
              name="diety"
              placeholder={this.state.heroes[this.state.hero].diety}
              value={this.state.heroes[this.state.hero].diety}
              onChange={element => this.change(element)}
            />
          </label>
          <label>
            Játékos neve:
            <input
              type="text"
              name="player"
              placeholder={this.state.heroes[this.state.hero].player}
              onChange={element => this.change(element)}
              value={this.state.heroes[this.state.hero].player}
            />
          </label>
          <label className="xlab">
          <button className="btn btn-primary btn-block" type="submit">
            Frissítés
          </button>
          </label>
        </form>
        <div>lol{this.props.userId}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.userId.item
})

export default connect(mapStateToProps, { fetchId })(Team)