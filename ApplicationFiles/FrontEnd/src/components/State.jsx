import React from "react";

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      foodName: "",
      foods: []
    };
    this.addFood = this.addFood.bind(this);
  }

  addFood(e, name) {
    e.preventDefault();
    let newList = this.state.foods;
    newList.push({ name: name });
    this.setState({ foods: newList, foodName: "" });
  }

  render() {
    return (
      <div>
        <h3>React State</h3>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <form
                  onSubmit={e => {
                    this.addFood(e, this.state.foodName);
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    value={this.state.foodName}
                    onChange={event => {
                      this.setState({ foodName: event.target.value });
                    }}
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                {this.state.foods.map(food => {
                  return <div key={food.name}>{food.name}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default State;
