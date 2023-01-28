import React, { useState } from 'react';
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

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };

  // const addToCart = () => {
  //   setBtnState((prevState) => !prevState);
  // };

  // let wrapperState = 'wrapper';
  // let sendBtn = 'В КОРЗИНУ';
  // if (btnState) {
  //   wrapperState = 'wrapper_active';
  //   sendBtn = 'ДОБАВЛЕНО';
  // }

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
          <h2>{count}</h2>
          <button className={style.group_btn} onClick={incrementHandler}>
            +
          </button>
        </div>
        <button className={style.group_sent} onClick={() => setIsInCart((prevState) => !prevState)}>
          {isInCart ? 'ВЕРНУТЬ' : 'В КОРЗИНУ'}
        </button>
      </div>
    </div>
  );
};
