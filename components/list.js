"use client";
import { useState } from "react";

export default function List({data}) {
  const [cart, setCart] = useState([]);

    return (
      <div>
      {cart.length === 0 ? <p>No items in cart.</p> : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
          </div>
        ))
      )}
    </div>
    );
  }
  