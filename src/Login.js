import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false,
      errorMessage: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    if (password === "12345") {
      this.setState({ isLoggedIn: true, errorMessage: "" });
    } else {
      this.setState({
        errorMessage: "Invalid username or password",
        isLoggedIn: false,
      });
    }
  };

  render() {
    const { title } = this.props;
    const { isLoggedIn, errorMessage, username } = this.state;

    return (
      <div className="login-page">
        {/* Background image is applied to the entire page */}
        <div className="login-container">
          <h2>{title}</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          {/* Display error message if login fails */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>

        {}
        {isLoggedIn && (
          <div className="flixfare-message">
            <h2>Welcome {username} to FlixFare</h2>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
