import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import { createStore } from "redux";
import reducer from "./store/reducer";
const store = createStore(reducer);
window.store = store;
const rootEl = document.getElementById("root");
const render = () => {
  return ReactDOM.render(
    <div>
      <Counter
        state={store.getState()}
        decrease={action => store.dispatch(action)}
        increase={action => store.dispatch(action)}
        change={action => store.dispatch(action)}
      />
    </div>,
    rootEl
  );
};
render();
store.subscribe(render);
