import React from "react";
import './Menu.css';
import "./App.css";

function App() {
  const preventNavigation = (event) => {
    event.preventDefault();
    // Add your custom logic here, e.g., showing an alert or logging the action
    console.log("Navigation prevented");
  };

  const goToLogin = () => {
    // Add your navigation logic here, e.g., redirecting to the login page
    console.log("Navigate to Login");
  };

  return (
    <div id="title">
      <div id="logo"></div>
      <div id="nav-links">
        <a href="#" onClick={preventNavigation}>
          HOME
        </a>
        <a href="#" onClick={preventNavigation}>
          ABOUT US
        </a>
        <a href="#" onClick={preventNavigation}>
          BOOK SHOWS
        </a>
        <a href="#" onClick={preventNavigation}>
          BOOK EVENTS
        </a>
        <a href="#" onClick={preventNavigation}>
          BOOK SPORTS
        </a>
      </div>
      <div className="skip-login-wrapper">
        <button id="loginButton" className="aprimary-btn" onClick={goToLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default App;
