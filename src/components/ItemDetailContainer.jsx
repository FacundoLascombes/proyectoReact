import "../styles/ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../data/data";
import { ItemList } from "./ItemList";

export const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  <ItemList items={items}/>

  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    getItems.then((res) => {
      setItems(res);
    });
  }, []);

  console.log(items);

  return (
    <div className="divRootItemList">
       {items.map(items => 
        <div key={items.id} className="borderItem">
          <NavLink to='/category/item/:id' > <h1>{items.title}</h1> </NavLink> 
          <p>{items.description}</p>
          <img src={items.image} alt="" />
        </div>
        )}
    </div>
  );
};
