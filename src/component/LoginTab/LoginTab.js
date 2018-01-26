import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '@firebase/app';
import { connect } from 'react-redux';
import './login-tab.css';

class LoginTab extends Component {
    constructor(props) {
        super(props);

        this.loggout = this.loggout.bind(this);
        this.state = { isLoggedIn: false };
    }

    loggout() {
        firebase.auth().signOut();
    }

    render() {

        return (
            /* ********** if logged in ********** */
            (this.props.isLoggedIn) ?
                (
                    <ul className="navbar-nav navbar-right">
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Hello</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={this.loggout} to="/signin">Log off</Link>
                        </li>
                    </ul>
                )
                /* ********** if not logged in ********** */
                : (
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <Link className="nav-item" to="/signup">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">Sign In</Link>
                        </li>
                    </ul>
                )
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginTab);