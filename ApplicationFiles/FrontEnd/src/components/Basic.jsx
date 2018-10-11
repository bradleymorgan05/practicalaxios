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
        <h3>Local Server</h3>
        <button onClick={this.searchBasic}>Get Message</button>
        <div>
          <h4>{this.state.message}</h4>
        </div>
      </div>
    );
  }
}

export default Basic;
