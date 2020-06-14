import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';

export const db = firebase
.initializeApp({
	apiKey: "AIzaSyBIxnvJppSyH_pi7mSMotr1Gf2J64pdlYc",
	authDomain: "wtm-test-61261.firebaseapp.com",
	databaseURL: "https://wtm-test-61261.firebaseio.com",
	projectId: "wtm-test-61261",
	storageBucket: "wtm-test-61261.appspot.com",
	messagingSenderId: "560951531202",
	appId: "1:560951531202:web:5bcf0f131ed126d5c14d5b"
})
.firestore();

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

// Add the public key generated from the console here.
messaging.usePublicVapidKey("BBerdJcgORYrhrRwL6vJdVpNw4NChrOtE0_0v8pOzDugdghhjLw-SgG2XLQYUBlQsOB_cyOWIJfrnUX0XDH2Cg4");

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
export const askPermission = function () {
	messaging.getToken().then(() => {

	}).catch(() => {

	}).finally(function(){
		window.EventBus.$emit("changedPermission");
	});
};

messaging.onMessage(function (message) {
	window.console.log("mesaj geldi");
	window.EventBus.$emit("getMessage",message);
});

export const getPermission = function(){
	return Notification.permission;
}
