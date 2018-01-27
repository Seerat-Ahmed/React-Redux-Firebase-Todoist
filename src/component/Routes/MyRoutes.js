import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import SignUpForm from '../SignUpForm/SignUpForm';
import { Switch } from 'react-router';
import App from '../App/App';
import NotFound404 from '../NotFound404/NotFound404';
import * as firebase from 'firebase';
import SignInForm from '../SignInForm/SignInForm';
import NavBar from '../NavBar/NavBar';
import { connect } from 'react-redux';
import history from '../../history';
import { _setLoginState } from '../../store/action/set-login-action';
import { _getUserinfo } from '../../store/action/get-user-info';
import Profile from '../Profile/Profile';
import { _getTodoList } from '../../store/action/todo-item-action';


class MyRoutes extends Component {

    constructor(props) {
        super(props);
        
        this.getAllTodos = this.getAllTodos.bind(this);
    }


    getAllTodos() {
        firebase.database().ref('/todos/' + this.props.user.uid + '/').on('child_added', (snapshot) => {
            console.log(snapshot.val(), snapshot.key);
            this.props.getTodoList(snapshot.val().todo, snapshot.key);
        });
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.setLoginState(true);
                this.props.getUserInfo(user.displayName, user.email, user.uid);
                this.getAllTodos();
                history.push('/');
            }
            else {
                this.props.setLoginState(false);
                history.push('/signin');
            }
        })
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <NavBar />
                        <Switch>
                            {(this.props.isLoggedIn) ? <Route exact path="/" component={App} /> : <Route exact path="/" component={SignInForm} />}
                            {(this.props.isLoggedIn) ? <Route exact path="/signup" component={App} /> : <Route exact path="/signup" component={SignUpForm} />}
                            {(this.props.isLoggedIn) ? <Route exact path="/signin" component={App} /> : <Route exact path="/signin" component={SignInForm} />}
                            <Route exact path="/profile" component={Profile} />
                            <Route component={NotFound404} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        user: state.user,
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        setLoginState: (flag) => dispatch(_setLoginState(flag)),
        getUserInfo: (name, email, uid) => dispatch(_getUserinfo(name, email, uid)),
        getTodoList: (todo, key) => dispatch(_getTodoList(todo, key)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRoutes);