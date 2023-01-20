import React from 'react';
import './cart.css';

export const Cart = () => {
  return (
    <div className="cart">
      <img src={'/images/cart.png'} alt="cart" />
      <div className="cart-counter">
        <span className="cart-counter-text">?</span>
      </div>
    </div>
  );
};
