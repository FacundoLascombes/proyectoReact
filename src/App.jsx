import NavBar from "./components/NavBar.jsx";
import ItemCount from "./components/ItemCount.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React from "react";
import { ItemDetailContainer } from "./components/ItemDetailContainer.jsx";

<style color="black"></style>;

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<ItemDetailContainer/>} />
        <Route path="/category/:id" element={<ItemDetailContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<ItemCount stock={7} initial={1} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
