import React from 'react';
import { useSelector } from 'react-redux';
import { CartCounterSelectors } from 'Store';
import style from './Cart.module.scss'

export const Cart = () => {
  const cartCounter = useSelector(CartCounterSelectors.getCartCounter);

  return (
    <div className={style.cart}>
      <img src={'/images/cart.png'} alt="cart" />
      {cartCounter !== 0 && (
        <div className={style.cart_counter}>
          <span className={style.cart_counter_text}>{cartCounter <= 9 ? cartCounter : '9+' }</span>
        </div>
      )}
    </div>
  );
};
