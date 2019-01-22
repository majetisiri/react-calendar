import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/main.css";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


// Reducers
import reminders from "./store/reducers/reminders";

const composeEnhancers = composeWithDevTools({});

const store = createStore(reminders, composeEnhancers(applyMiddleware(thunk)));

const appShell = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(appShell, document.getElementById("root"));
registerServiceWorker();
