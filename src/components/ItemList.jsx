import items from "./Item";
import React from "react";

 function ItemsFetched() {
   new Promise(function (resolve, reject) {
     setTimeout(() => {
       resolve(items);
     }, 2000);
   });
 }

  ItemsFetched().then(async function (ItemsFetched) {
  
  });

export default ItemsFetched;