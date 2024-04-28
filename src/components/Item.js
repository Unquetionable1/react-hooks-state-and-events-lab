import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart,setIncart]=useState(false)
  function hanleClick(e){
   setIncart(inCart=>!inCart)
  }

  const cart=inCart? "in-cart":"Add"
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cart} onClick={hanleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
