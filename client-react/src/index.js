import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App/index";
import * as serviceWorker from "./serviceWorker";
import reducers from "./store/reducers/index";
import config from "./config";
import fbConfig from './configs/fbConfigs'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { save, load } from "redux-localstorage-simple"

<<<<<<< HEAD
const createStoreWithMiddleware   = applyMiddleware(
        save() // Saving done here
    )(createStore)

const store = createStoreWithMiddleware(reducers,load(),
=======
const store = createStore(reducers, load(),
>>>>>>> 6f31223649a25052ab75bd37cfb43ea281f446a7
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase }), save()),
    reactReduxFirebase(fbConfig, { userProfile: 'users', attachAuthIsReady: true })
  )
);
/*
store.dispatch({
  type: 'ADD_TODO',
  text: 'Use Redux'
}) */
console.log(store.getState())
const app = (
  <Provider store={store}>
    <BrowserRouter basename={config.basename}>
      {/* basename="/datta-able" */}
      <App />
    </BrowserRouter>
  </Provider>
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(app, document.getElementById("root"));
  serviceWorker.unregister();
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

