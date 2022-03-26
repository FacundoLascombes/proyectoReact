import NavBar from "./components/NavBar.jsx";
import ItemCount from "./components/ItemCount.jsx";
import React from "react";
import { Fragment } from "react";
import { ItemDetailContainer } from "./components/ItemDetailContainer.jsx";

<style color="black"></style>;

function App() {
  return (
    <Fragment>
      <div>
        <NavBar />
      </div>

      <div>
        <ItemCount stock={7} initial={1} />
      </div>

      <div>
        <ItemDetailContainer />
      </div>
    </Fragment>
  );
}

export default App;