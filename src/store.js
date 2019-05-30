import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYuqN29Yx-qUtQhuJS05wQchvQNQGNwvA",
  authDomain: "reactclientpanel-aaada.firebaseapp.com",
  databaseURL: "https://reactclientpanel-aaada.firebaseio.com",
  projectId: "reactclientpanel-aaada",
  storageBucket: "reactclientpanel-aaada.appspot.com",
  messagingSenderId: "985170818382",
  appId: "1:985170818382:web:60c2d15e5a25cd04"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

// init firebase instance
firebase.initializeApp(firebaseConfig);

//init firestore
const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// create initial state
const initialState = {};

// create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
