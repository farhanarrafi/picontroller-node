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

firebase.turnOn = function turnOnComponent() {
    var componenets = firebase.database().ref('components/' + 1);
    componenets.on('value', function (snapshot) {
        //var component = JSON.parse(snapshot.val());
        console.log(snapshot.val())
        //updateComponents(component.id,component.status)
    });
};

function updateComponents(id, status) {
    console.log(id + " " + status);
}

module.exports = firebase;
