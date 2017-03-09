import React from 'react';
import { merge } from 'lodash';

const TYPES = [
  "fire",
  "electric",
  "normal",
  "ghost",
  "psychic",
  "water",
  "bug",
  "dragon",
  "grass",
  "fighting",
  "ice",
  "flying",
  "poison",
  "ground",
  "rock",
  "steel"
];

class PokemonForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      name: "",
      image_url: "",
      poke_type: "",
      attack: 0,
      defense: 0,
      move1: "",
      move2: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleInput(attr) {
    return (event) => {
      event.preventDefault();
      this.setState({ [attr]: event.currentTarget.value });
    };
  }

  submit(e){
    e.preventDefault();
    this.props.createPokemon({
      id: this.state.id,
      name: this.state.name,
      image_url: this.state.image_url,
      poke_type: this.state.poke_type,
      attack: this.state.attack,
      defense: this.state.defense,
      moves: [this.state.move1, this.state.move2]
    });
  }

  render(){

    let types = TYPES.map((type, index) => {
      return(
        <option value={type} key={index}>{type}</option>
      );
    });

    return(
      <form>
        <input type='text' placeholder='Name' onChange={ this.handleInput('name') } value={this.state.name}></input>
        <input type='text'placeholder='Image Url' onChange={ this.handleInput('image_url') } value={this.state.image_url}></input>
        <select onChange={ this.handleInput('poke_type') }>
            {types}
        </select>
        <input type='number' placeholder='Attack' onChange={ this.handleInput('attack') } value={this.state.attack}></input>
        <input type='number' placeholder='Defense' onChange={ this.handleInput('defense') } value={this.state.defense}></input>
        <input type='text' placeholder='Move 1' onChange={ this.handleInput('move1') } value={this.state.move1}></input>
        <input type='text' placeholder='Move 2' onChange={ this.handleInput('move2') } value={this.state.move2}></input>
        <button type="submit" onClick={ this.submit }>Create Pokemon</button>
      </form>
    );
  }
}

export default PokemonForm;
