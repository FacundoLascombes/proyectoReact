import React, { Fragment, useEffect, useState } from "react";
import "../styles/itemCount.css";
import filamento from "../images/filamento.jpg";

const  ItemCount = (props) => {
  const [countStock, setCountStock] = React.useState(0);



  return (
    <Fragment>
      <div className="root">
        <img className="filamento" src={filamento} />
        <h5>En Stock actualmente hay {props.stock}</h5>
        <h2> Cantidad: {countStock} </h2>

        <button
          disabled={countStock <= 0}
          onClick={() => setCountStock(countStock - 1)}
        >
           Quitar -
        </button>
        <button
          disabled={countStock == props.stock}
          onClick={() => setCountStock(countStock + 1)}
        >
          + Agregar
        </button>
      </div>
    </Fragment>
  );
};

export default ItemCount;
