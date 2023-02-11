import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartCounterSelectors } from 'Store';
import { CartCounterSliceActions } from 'Store/CartCounter/slice';
import style from './ListItem.module.scss';

type ListItemPropsType = {
  name: string;
  id: number;
  genus: string;
  family: string;
  order: string;
  count?: number;
};

export const ListItem = (props: ListItemPropsType) => {
  const { name, id, genus, family, order } = props;

  const [count, setCount] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const disppatch = useDispatch();
  const cartCounter = useSelector(CartCounterSelectors.getCartCounter);

  const cartCounterHandler = () => {
    setIsInCart((prevState) => !prevState);
    if (!isInCart) {
      disppatch(CartCounterSliceActions.setCartCounter({ counter: 1 }));
    } else {
      disppatch(CartCounterSliceActions.setCartCounter({ counter: -1 }));
    }
    console.log('isInCart = ', isInCart);
    console.log('counter = ', cartCounter);
  };

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className={isInCart ? style.wrapper_active : style.wrapper}>
      {/* <img src={image} alt="img" /> */}
      <div className={style.name}>{name}</div>
      <div className={style.attributes}>
        <p>
          <span className={style.attribute}>id: </span>
          {id}
        </p>
        <p>
          <span className={style.attribute}>Род: </span>
          {genus}
        </p>
        <p>
          <span className={style.attribute}>Семейство: </span>
          {family}
        </p>
        <p>
          <span className={style.attribute}>Порядок: </span>
          {order}
        </p>
      </div>
      {/* <div className={style.price}>{price} руб/шт</div> */}
      <div className={style.group}>
        <div className={style.group_groupset}>
          <button className={style.group_btn} disabled={count === 1} onClick={decrementHandler}>
            -
          </button>
          <h3>{count}</h3>
          <button className={style.group_btn} onClick={incrementHandler}>
            +
          </button>
        </div>
        <button className={style.group_sent} onClick={cartCounterHandler}>
          {isInCart ? 'ВЕРНУТЬ' : 'В КОРЗИНУ'}
        </button>
      </div>
    </div>
  );
};
