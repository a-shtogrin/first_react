import React, { useState } from 'react';
import './product.css';

type ProductPropsType = {
  image: string;
  name: string;
  code: string;
  material?: string;
  color?: string;
  price?: number;
  count?: number;
  productCount?: number;
};
/* //? - свойство не обязательное */

export const ProductCard = (props: ProductPropsType) => {
  const { image } = props;
  const { name } = props;
  const { code } = props;
  const { material } = props;
  const { color } = props;
  const { price } = props;

  const [count, setCount] = useState(1);
  const [productCount, setProductCount] = useState(0);

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };

  const incrementProductHandler = () => {
    setProductCount((prev) => prev + 1);
  };

  return (
      <div className="product-wrapper">
        <div className="product-image">
          <img src={image} alt="img" />
        </div>
        <div className="product-name">{name}</div>
        <div className="product-attributes">
          <p>
            <span className="attribute-name">Код: </span>
            {code}
          </p>
          <p>
            <span className="attribute-name">Mатериал: </span>
            {material}
          </p>
          <p>
            <span className="attribute-name">Цвет: </span>
            {color}
          </p>
        </div>
        <div className="product-price">{price} руб/шт</div>
        <div className="product-counter-group">
          <div className="product-counter-group-set">
            <button className='product-counter-btn' disabled={count === 1} onClick={decrementHandler}>
              -
            </button>
            <h2>{count}</h2>
            <button className='product-counter-btn' onClick={incrementHandler}>+</button>
          </div>
          <button className="sent-to-cart" onClick={incrementProductHandler}>В КОРЗИНУ</button>
          <span>Товар добавлен в корзину {productCount} раз</span>
        </div>
      </div>
  );
};
