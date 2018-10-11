import React from "react";
import axios from "axios";

class Personal extends React.Component {
  constructor() {
    super();
    this.state = {
      foodName: "",
      foods: [{ name: "" }]
    };
    this.addFood = this.addFood.bind(this);
  }

  addFood(e, name) {
    e.preventDefault();
    axios.post("/food", { params: { food: name } }).then(() => {
      axios.get("/foods").then(data => {
        console.log(data);
      });
    });
  }

  render() {
    return (
      <div>
        <div>Search</div>
        <div className="row">
          <div className="col">
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
          <div className="col">
            {this.state.foods.map(food => {
              return <div key={food.name}>{food.name}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;
