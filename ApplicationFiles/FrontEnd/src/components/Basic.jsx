import React from "react";
import axios from "axios";

class Basic extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.searchBasic = this.searchBasic.bind(this);
  }

  searchBasic() {
    axios.get("/basic").then(({ data }) => {
      console.log(data, this.state.message);
      this.setState({ message: data });
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.searchBasic}>Get Message</button>
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default Basic;
