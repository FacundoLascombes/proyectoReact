import "./ItemListContainer.css";
import React from "react";

const divStyles = {fontSize: "30px", backgroundColor: "red"}

function ItemListContainer() {
    const saludo = "Hola! Me llamo Facundo!"; 
    return <h1 style={divStyles}>{saludo}</h1>;
}

export default ItemListContainer;