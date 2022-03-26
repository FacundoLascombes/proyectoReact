import "../styles/ItemListContainer.css";
import { useEffect, useState } from "react";
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
    <div>
       {items.map(items => 
        <div key={items.id} className="borderItem">
          <h1>{items.title}</h1>
          <p>{items.description}</p>
          <img src={items.image} alt="" />
        </div>
        )}
    </div>
  );
};
