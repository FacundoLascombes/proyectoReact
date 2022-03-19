import React from "react";
import "../styles/ItemListContainer.css";

export const Item = ({ item }) => {
  return (
    <div className="borderItem">
      <li>
        <p>Numero de id del filamento: {item.id}</p>
      </li>
      <li>
        <h1>{item.title}</h1>
      </li>
      <li>
        <p>{item.description}</p>
      </li>
      <li>
        <h4>{item.price}</h4>
      </li>
      <li>
        <img src={item.image} alt="" />
      </li>
    </div>
  );
};
