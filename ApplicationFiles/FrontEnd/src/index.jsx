import React from "react";
import ReactDOM from "react-dom";
// Importing Sub Components
import Youtube from "./components/Youtube.jsx";
import Basic from "./components/Basic.jsx";

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
            style={{ cursor: "pointer" }}
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
                  style={{ cursor: "pointer" }}
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
                  style={{ cursor: "pointer" }}
                >
                  Basic Local Server Response
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    this.setState({ route: "state" });
                  }}
                  style={{ cursor: "pointer" }}
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
                  style={{ cursor: "pointer" }}
                >
                  Personal Database
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    this.setState({ route: "auto" });
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Autocomplete
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
          {this.state.route === "state" && <div>state</div>}
          {this.state.route === "personal" && <div>personal</div>}
          {this.state.route === "auto" && <div>auto</div>}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
