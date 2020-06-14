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

function isSupported() {
	return firebase.messaging.isSupported();
}

export function getPermission() {
	return isSupported() ? Notification.permission : null;
}

const messaging = isSupported() ? firebase.messaging() : {};

export function askPermission() {
	if (!isSupported())
		return false;
	else {
		messaging.getToken().catch(() => {

		}).finally(function () {
			window.EventBus.$emit("changedPermission");
		});
	}
}

if (isSupported()) {
	messaging.usePublicVapidKey("BBerdJcgORYrhrRwL6vJdVpNw4NChrOtE0_0v8pOzDugdghhjLw-SgG2XLQYUBlQsOB_cyOWIJfrnUX0XDH2Cg4");
	messaging.onMessage(function (message) {
		window.EventBus.$emit("getMessage", message);
	});
}
