import React from "react";
import ReactDOM from "react-dom";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppContainer from "./components/AppContainer";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";


const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
        <Provider store={store}>
          <AppContainer />
        </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;