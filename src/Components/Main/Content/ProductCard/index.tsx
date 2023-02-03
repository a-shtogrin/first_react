import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartCounterSelectors } from 'Store';
import { CartCounterSliceActions } from 'Store/CartCounter/slice';
import style from './Product.module.scss';

type ProductPropsType = {
  image: string;
  name: string;
  code: string;
  material?: string;
  color?: string;
  price?: number;
  count?: number;
};
/* //? - свойство не обязательное */

export const ProductCard = (props: ProductPropsType) => {
  const { image, name, code, material, color, price } = props;

  const [count, setCount] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const disppatch = useDispatch();
  const cartCounter = useSelector(CartCounterSelectors.getCartCounter);

  const cartCounterHandler = () => {
    setIsInCart((prevState) => !prevState);
    console.log('isInCart = ', isInCart);
    if (isInCart) {
      disppatch(CartCounterSliceActions.setCartCounter({ counter: 1 }));
    }
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
      <img src={image} alt="img" />
      <div className={style.name}>{name}</div>
      <div className={style.attributes}>
        <p>
          <span className={style.attribute}>Код: </span>
          {code}
        </p>
        <p>
          <span className={style.attribute}>Mатериал: </span>
          {material}
        </p>
        <p>
          <span className={style.attribute}>Цвет: </span>
          {color}
        </p>
      </div>
      <div className={style.price}>{price} руб/шт</div>
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
