import React, { Fragment, useEffect, useState } from "react";
import "../styles/itemCount.css";
import filamento from "../images/filamento.jpg";

const ItemCount = (props: { countStock: Number }) => {
  const [countStock, setCountStock] = React.useState(0);

  let numero1 = 0;
  let numero2 = 0;
  const stock = 10;

  var [botonActivo1, setBotonActivo] = useState(numero1);
  var [botonActivo2, setBotonActivo] = useState(numero2);

  if (stock == countStock) {
    botonActivo1 = 1;
  }
  if (countStock == 0) {
    botonActivo2 = 1;
  }

  return (
    <Fragment>
      <div className="root">
        <img src={filamento} />
        <h5>En Stock actualmente hay {stock}</h5>
        <h2> Cantidad: {countStock} </h2>

        <button
          className="botonStyle, decr"
          disabled={botonActivo2}
          onClick={() => setCountStock(countStock - 1)}
        >
          Decrementar
        </button>
        <button
          className="botonStyle, incr"
          disabled={botonActivo1}
          onClick={() => setCountStock(countStock + 1)}
        >
          Incrementar
        </button>
      </div>
    </Fragment>
  );
};

export default ItemCount;
