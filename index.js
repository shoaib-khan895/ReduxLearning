
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import React from 'react';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
// import rootReducer from './redux/src/Store';
import rootReducer from './TODO/redux/src/Store'
export const store = createStore(rootReducer, undefined, applyMiddleware(thunk))

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxApp);