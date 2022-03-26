import "../styles/ItemListContainer.css";
import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { data } from '../data/data';
//import { item } from './ItemDetailContainer';


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
    });
  }, []);


  return <ItemList items={items} />
};


