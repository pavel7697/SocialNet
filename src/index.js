import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";

let rerenderDOM = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        data={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        // store={store}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderDOM(store.getState());
store.subscribe(rerenderDOM);
