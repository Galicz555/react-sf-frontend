import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { fetchId } from '../../../actions/idActions';

class Oneliners extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      spell: {},
      spellRequest: '',
      classSpellListRequest: 'Barbár',
      hunSpell: {},
      classSpellList: [],
    };

    this.change = this.change.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this);
    this.spellTranslator = this.spellTranslator.bind(this);
    this.Spellflasher = this.Spellflasher.bind(this);
    this.ListItem = this.ListItem.bind(this);
    this.spellListGetter = this.spellListGetter.bind(this);
    this.receivedSpell = {}
  }

  change(element) {
    this.setState({
      [element.target.name]: element.target.value
    });
  }

  handleChange(event) {
    this.setState({classSpellListRequest: event.target.value});
  }

  componentDidMount() {
    this.props.fetchId();
  }

  submit(element) {
    element.preventDefault();
    Axios.get(`https://www.dnd5eapi.co/api/spells/${this.state.spellRequest}/`)
      .then(res => {
        this.setState({
          spell: res.data
        })
        console.log(this.state)
      })
      .catch(err => {
        console.log(err);
      });
  }

  ListItem(item) {
    return <li>{(item.value[0]).replace(/_/g, ' ')}: {item.value[1]}</li>;
  }

  Spellflasher() {
    const spellEntries = Object.entries(this.state.hunSpell)
    return (
      <ul>
        {spellEntries.map((spellEntry) =>
          <this.ListItem key={spellEntry[0].toString()}
                          value={spellEntry} />
        )}
      </ul>
    );

  }

  spellTranslator() {
    //local teszt
    /*this.setState(prevState => {
      let hunSpell = Object.assign({}, prevState.hunSpell);
      hunSpell = this.receivedSpell;
      return { hunSpell };
    })*/
    //api
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    };
    this.setState({
      hunSpell: this.receivedSpell
    })
    Axios.post(`http://localhost:5000/spell`, {
    spell: this.state.spell
  }, options
  )
    .then(res => {
      this.setState(prevState => {
        let hunSpell = Object.assign({}, prevState.hunSpell);
        hunSpell = res.data;
        return { hunSpell };
      })
      console.log(this.state.hunSpell);
    })
    .catch(err => {
      console.log(err);
    });
  }

  spellListGetter() {
    Axios.get(`https://www.dnd5eapi.co/api/classes/${this.state.classSpellListRequest}/spells/`)
      .then(res => {
        this.setState({
          classSpellList: res.data
        })
        console.log(this.state)
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
    <div>
      <form className='spellInput' onSubmit={element => this.submit(element)}>
        <label>
          Varázslatok:
          <input
            type='string'
            name='spellRequest'
            placeholder='/fireball'
            onChange={element => this.change(element)}
            value={this.state.spellRequest}
          />
        </label>
        <button className='btn btn-primary btn-block' type='submit'>
          Frissítés
        </button>
      </form>
      <button className='btn btn-primary btn-block' type='button' onClick={this.spellTranslator}>
        Fordítás
      </button>
      <this.Spellflasher />
      <div>
      <label>
        Válassz kasztot:
        <select value={this.state.classSpellListRequest} onChange={this.handleChange}>
          <option value="barbarian">Barbár</option>
          <option value="bard">Bárd</option>
          <option value="cleric">Pap</option>
          <option value="druid">Druida</option>
          <option value="fighter">Harcos</option>
          <option value="monk">Szerzetes</option>
          <option value="paladin">Szent lovag</option>
          <option value="ranger">Vándor</option>
          <option value="rogue">Kalandor</option>
          <option value="sorcerer">Mágus</option>
          <option value="warlock">Boszorkány</option>
          <option value="wizard">Varázsló</option>
        </select>
      </label>
      <button className='btn btn-primary btn-block' type='button' onClick={this.spellListGetter}>
        Varázskönyv
      </button>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.userId.item
})

export default connect(mapStateToProps, { fetchId })(Oneliners)
