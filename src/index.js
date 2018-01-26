import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css';
import store from '../src/store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import MyRoutes from './component/Routes/MyRoutes';


var config = {
    apiKey: "AIzaSyBvlDVkLnOPNM3agrkwiWLWKgKoAbg_4do",
    authDomain: "bookmarks-c6978.firebaseapp.com",
    databaseURL: "https://bookmarks-c6978.firebaseio.com",
    projectId: "bookmarks-c6978",
    storageBucket: "bookmarks-c6978.appspot.com",
    messagingSenderId: "961234129794"
};

firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
        <MyRoutes />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
