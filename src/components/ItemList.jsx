import { Item } from './Item';
import React from "react";

 export const ItemList = ({ items }) => {
   return (
     <ul>
       {items.map((item) => (
        <Item item={item} />
      ))}
     </ul>
   )
 };
