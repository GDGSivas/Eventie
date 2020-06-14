importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

firebase.initializeApp({
	apiKey: "AIzaSyBIxnvJppSyH_pi7mSMotr1Gf2J64pdlYc",
	authDomain: "wtm-test-61261.firebaseapp.com",
	databaseURL: "https://wtm-test-61261.firebaseio.com",
	projectId: "wtm-test-61261",
	storageBucket: "wtm-test-61261.appspot.com",
	messagingSenderId: "560951531202",
	appId: "1:560951531202:web:5bcf0f131ed126d5c14d5b"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
