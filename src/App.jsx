import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemCount from "./components/ItemCount.jsx";
import React from "react";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div>
        <NavBar />
      </div>

      <div>
        <ItemListContainer item="filamentos" />
      </div>

      <div>
      <ItemCount stock={7} initial={1} />
      </div>
    </Fragment>
  );
}

export default App;
