var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyCkBTch7JluECyhYUcw_lQzPwBzgRz1XdM",
    authDomain: "raspberry-sf.firebaseapp.com",
    databaseURL: "https://raspberry-sf.firebaseio.com",
    projectId: "raspberry-sf",
    storageBucket: "raspberry-sf.appspot.com",
    messagingSenderId: "201035736094"
};

firebase.initializeApp(config);

function turnOnComponent() {
    firebase.database().ref('componenets').get()
}

module.exports = firebase;
