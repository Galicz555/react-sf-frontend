import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { fetchId } from '../../../actions/idActions';

class Oneliners extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      spell: {},
      spellString: "",
      spellHuString: "",
      spellRequest: "",
      hunSpell: {
      },
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.translator = this.translator.bind(this);
    this.Spellflasher = this.Spellflasher.bind(this);
    this.ListItem = this.ListItem.bind(this);
    this.receivedSpell = {
      areaOfEffect: "gömb 20",
      castingTime: "1 akció",
      component: "V, S, M",
      concentration: "hamis",
      damageAtSlotLevel: "LvL3: 8d6, LvL4: 9d6, LvL5: 10d6, LvL6: 11d6, LvL7: 12d6, LvL8: 13d6, LvL9: 14d6",
      damageType: "Tűz",
      dc: "DEX fele",
      desc: "Egy fényes csík villog a mutatóujjától egy olyan pontig, amelyet a hatótávolságon belül választott, majd alacsony ordítással lángrobbanássá válik. Minden lénynek egy 20 láb sugarú gömbben, amelynek központja ezen a ponton van, ügyességi megtakarítást kell tennie. A cél 8d6 tűzkárt okoz egy sikertelen mentéskor, vagy fele annyi sebzést egy sikeresen., A tűz sarkokon átterjed. Meggyújtja a területen gyúlékony tárgyakat, amelyeket nem viselnek vagy hordanak.",
      duration: "Pillanatnyi",
      higherLevel: "Ha ezt a varázslatot egy 4. vagy annál magasabb szintű varázslattal használod, a sebzés 1d6-mal nő minden egyes 3. szint fölötti slot szintnél.",
      level: "3",
      material: "Egy apró golyó denevér guanóval és kénnel.",
      name: "Tűzgömb",
      range: "150 láb",
      ritual: "hamis",
      schoolName: "Felidézés"
    }
  }

  change(element) {
    this.setState({
      [element.target.name]: element.target.value
    });
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
    return <li>{item.value[0]}: {item.value[1]}</li>;
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

  translator() {
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

  render() {
    return (
    <div>
      <form className="spellInput" onSubmit={element => this.submit(element)}>
        <label>
          Varázslatok:
          <input
            type="string"
            name="spellRequest"
            placeholder="/fireball"
            onChange={element => this.change(element)}
            value={this.state.spellRequest}
          />
        </label>
        <button className="btn btn-primary btn-block" type="submit">
          Frissítés
        </button>
      </form>
      <button className="btn btn-primary btn-block" type="button" onClick={this.translator}>
          Fordítás
        </button>
        <this.Spellflasher />
      <div>

      </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.userId.item
})

export default connect(mapStateToProps, { fetchId })(Oneliners)
