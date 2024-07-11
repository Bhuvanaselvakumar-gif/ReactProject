//import React from 'react'
import React, {useEffect, useState} from "react";
import './Cart.css';
export const Cart = ({cart, setCart}) => {
    const [total, setTotal]=useState(0);
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price),0))
    }, [cart]);
  return (
    <>
    <h1 className="cart-heading">Cart Products</h1>
    <div className="cart-container">
       {
        cart.map((product)=>(
            <div className="cart-product" key={product.id}>
       
       <div className="img">
    <img src={product.pic} alt="image" style={{ width: '120px', height: '120px' }} />
        </div>
        <div className="cart-product-details">
            <h3>{product.name}</h3>
            <p>Price Rs:{product.price}</p>

     </div>
     </div>

        ))
       }
    </div>
    <h1 className="cart-amt">Total Amount Rs:{total}</h1>
    </>
  );
};