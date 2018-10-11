import React from "react";
import ReactDOM from "react-dom";
// Importing Sub Components
import Youtube from "./components/Youtube.jsx";
import Basic from "./components/Basic.jsx";
import State from "./components/State.jsx";
import Personal from "./components/Personal.jsx";
import Dependent from "./components/Dependent.jsx";

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
              <h2>
                <u>Practical Axios: an interactive tutorial</u>
              </h2>

              <div>
                <strong>Axios</strong> is a Promise based HTTP client for the
                browser and node.js
              </div>
              <div style={{ marginTop: "20px" }}>
                <u>Benefits</u>
              </div>
              <div>More legible code </div>
              <div>Built-In clientside protection against XSRF</div>
              <div>Intercept request and response</div>
              <div>Automatic transform JSON data</div>

              <div style={{ marginTop: "20px" }}>
                <u>Installation instruction</u>
              </div>
              <div>1) Npm install axios </div>
              <div>2) Import axios in each react component</div>
              <div style={{ marginTop: "20px" }}>
                <strong>
                  <u>Utilized Stack:</u>
                </strong>
                (Express: bodyparser/path), <strong>MongoDB</strong>
                (Mongoose) , <strong>React</strong>
              </div>
            </div>
          )}
          {this.state.route === "youtube" && <Youtube />}
          {this.state.route === "basic" && <Basic />}
          {this.state.route === "state" && <State />}
          {this.state.route === "personal" && <Personal />}
          {this.state.route === "dependent" && <Dependent />}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
