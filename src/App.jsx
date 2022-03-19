import NavBar from "./components/NavBar.jsx";
import ItemsFetched from "./components/ItemList.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemCount from "./components/ItemCount.jsx";
import React from "react";
import { Fragment } from "react";

<style color="black"></style>

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

      <div>
        <ItemsFetched />
      </div>
    </Fragment>
  );
}

export default App;
