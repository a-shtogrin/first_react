import React from 'react';
import { useSelector } from 'react-redux';
import { CartCounterSelectors } from 'Store';
import './cart.css';

export const Cart = () => {
  const cartCounter = useSelector(CartCounterSelectors.getCartCounter);

  return (
    <div className="cart">
      <img src={'/images/cart.png'} alt="cart" />
      {cartCounter !== 0 && (
        <div className="cart-counter">
          <span className="cart-counter-text">{cartCounter}</span>
        </div>
      )}
    </div>
  );
};
