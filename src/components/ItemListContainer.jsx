import "../styles/ItemListContainer.css";
import React from "react";

const divStyles = { fontSize: "30px", backgroundColor: "red" };

const ItemListContainer = (props) => {
  return <h1> ¿Cuantos {props.item} vas a necesitar? </h1>;
};

export default ItemListContainer;
