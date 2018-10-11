import React from "react";
import ReactDOM from "react-dom";
// Importing Sub Components
import Youtube from "./components/Youtube.jsx";
import Basic from "./components/Basic.jsx";
import State from "./components/State.jsx";
import Personal from "./components/Personal.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "home"
    };
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a
            className="navbar-brand"
            onClick={() => {
              this.setState({ route: "home" });
            }}
            style={{ cursor: "pointer", color: "white", fontWeight: "bold" }}
          >
            Practical Axios
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    this.setState({ route: "youtube" });
                  }}
                  style={{
                    cursor: "pointer",
                    color: "orange",
                    fontWeight: "bold"
                  }}
                >
                  Youtube API
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    this.setState({ route: "basic" });
                  }}
                  style={{
                    cursor: "pointer",
                    color: "purple",
                    fontWeight: "bold"
                  }}
                >
                  Local Server
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    this.setState({ route: "state" });
                  }}
                  style={{
                    cursor: "pointer",
                    color: "red",
                    fontWeight: "bold"
                  }}
                >
                  React State
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    this.setState({ route: "personal" });
                  }}
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    fontWeight: "bold"
                  }}
                >
                  Personal Database
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    this.setState({ route: "dependent" });
                  }}
                  style={{
                    cursor: "pointer",
                    color: "black",
                    fontWeight: "bold"
                  }}
                >
                  Dependent Calls
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div style={{ marginTop: "25px" }}>
          {this.state.route === "home" && (
            <div>
              <div>Practical Axios is an interactive tutorial</div>
            </div>
          )}
          {this.state.route === "youtube" && <Youtube />}
          {this.state.route === "basic" && <Basic />}
          {this.state.route === "state" && <State />}
          {this.state.route === "personal" && <Personal />}
          {this.state.route === "dependent" && <div>dependent</div>}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
