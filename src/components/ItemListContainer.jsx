import "../styles/ItemListContainer.css";
import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { data } from '../data/data';

const divStyles = { fontSize: "30px", backgroundColor: "red" };

// const ItemListContainer = (props) => {
//   return <h1> ¿Cuantos {props.item} vas a necesitar? </h1>;
// };


export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    getItems.then((res) => {
      setItems(res);
      return (
        <div>
          <h1>hgoads</h1>
        </div>
      )
    });
  }, []);

  return <ItemList items={items} />
};


