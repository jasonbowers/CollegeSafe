import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const firebaseApp = firebase.initializeApp(config);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export class FirebaseLogin extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    return (
      <div>
        {user ? <p>Oh hi, {user.displayName}</p> : <p>Please sign in.</p>}
        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(FirebaseLogin);
