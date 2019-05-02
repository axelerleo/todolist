// export const DB_CONFIG = {
//   apiKey: "AIzaSyBTxWreZQ0eF3oZBp6u214qD0GIQKwHg-4",
//   authDomain: "todolist-43863.firebaseapp.com",
//   databaseURL: "https://todolist-43863.firebaseio.com",
//   projectId: "todolist-43863",
//   storageBucket: "todolist-43863.appspot.com",
//   messagingSenderId: "806345079487",
//   appId: "1:806345079487:web:590015739ff6e69d"
// };

import * as firebase from "firebase";

// const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBTxWreZQ0eF3oZBp6u214qD0GIQKwHg-4",
  authDomain: "todolist-43863.firebaseapp.com",
  databaseURL: "https://todolist-43863.firebaseio.com",
  projectId: "todolist-43863",
  storageBucket: "todolist-43863.appspot.com",
  messagingSenderId: "806345079487",
  appId: "1:806345079487:web:590015739ff6e69d"
};

firebase.initializeApp(config);

export default firebase;
