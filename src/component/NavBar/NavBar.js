import React, { Component } from 'react';
import './NavBar.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginTab from '../LoginTab/LoginTab';

class NavBar extends Component {

  render() {
    return (


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <img src={require('../../logo.svg')} className="logo" alt="firebase logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          </ul>
          <div className="nav-right">
            <LoginTab />
          </div>
        </div>
      </nav>
        );
  }
}


export default NavBar;


