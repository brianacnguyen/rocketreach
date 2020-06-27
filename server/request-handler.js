const express = require('express');
const router = express.Router();
const request = require('request-promise');
const path = require('path');
const firebase = require("firebase-admin");
const serviceAccount = require("./rocketreach-app-firebase-key.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://rocketreach-app.firebaseio.com"
});
const firebaseRef = firebase.database().ref();

function getPosts (req, res) {
    let dataToStore = '';
    let id = req.params.id;

    firebaseRef.child(id).once('value').then((snapshot) => {
        if (snapshot.val()) {
            return res.send(snapshot.val())
        } else {
            let requestURI = 'http://' + id +'.com/api/read/json';
            request({
                uri: requestURI
            })
            .then((response) => {
                let setObject = {};
                setObject[id] = response;
                firebaseRef.set(setObject);
                return res.send(response);
            })
            .catch((err) => {
                return res.send('error');
            })
        }
    })
}

module.exports = {
    getPosts
}
