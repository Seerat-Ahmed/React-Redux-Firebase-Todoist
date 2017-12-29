import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';


var config = {
    apiKey: "AIzaSyB1iHDWAnpj5bcQKP5VaEfQYWVICGE6k40",
    authDomain: "fir-acc02.firebaseapp.com",
    databaseURL: "https://fir-acc02.firebaseio.com",
    projectId: "fir-acc02",
    storageBucket: "fir-acc02.appspot.com",
    messagingSenderId: "1012391573738"  
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
