import React from "react";
import axios from "axios";

class Personal extends React.Component {
  constructor() {
    super();
    this.state = {
      randomNum: 0,
      pokemonUrl: ""
    };
    this.generatePokemon = this.generatePokemon.bind(this);
  }

  generatePokemon(e) {
    e.preventDefault();
    axios
      .get(
        "https://www.random.org/integers/?num=1&min=1&max=151&col=1&base=10&format=plain&rnd=new"
      )
      .then(({ data }) => {
        this.setState({ randomNum: data });
        let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${data}/`;
        axios.get(pokeUrl).then(({ data }) => {
          this.setState({ pokemonUrl: data.sprites.front_default });
        });
      });
  }

  render() {
    return (
      <div>
        <h2>Dependent Calls</h2>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <button onClick={this.generatePokemon}>Generate Pokemon</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                Pokedex Entry: {this.state.randomNum}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <img src={this.state.pokemonUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;
