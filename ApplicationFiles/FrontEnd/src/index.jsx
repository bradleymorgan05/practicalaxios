import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <header className="navbar logo">
          <h1>Maverick</h1>
        </header>
        <div className="container">hello</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
