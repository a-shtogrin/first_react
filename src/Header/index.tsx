import React from 'react';
import './header.css';
import { Cart } from './Cart';

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="top-bar">
          <img src={'/images/logo.png'} alt="logo" />
          <div className="top-menu-city">
            <img src={'/images/pin.png'} alt="pin" />
            <select name="cities" id="city">
              Москва
            </select>
          </div>
          <div className="top-bar-phone">
            <p>8 495 018-32-10</p>
            <img src={'/images/arrow-down.png'} alt="arrow-down" />
            <a href="">Заказать звонок</a>
          </div>
          <ul className="top-bar-list">
            <li>
              <a href="">Оплата</a>
            </li>
            <li>
              <a href="">Доставка</a>
            </li>
            <li>
              <a href="">Поставщикам</a>
            </li>
            <li>
              <a href="">Статьи</a>
            </li>
            <li>
              <a href="">Контакты</a>
            </li>
          </ul>
        </div>
        <div className="menu-bar">
          <div className="menu-bar-catalog">
            <img src={'/images/burger.png'} alt="burger" />
            <p>КАТАЛОГ ТОВАРОВ</p>
          </div>
          <div className="menu-bar-stocks">
            <p>АКЦИИ</p>
          </div>
          <div className="menu-bar-brends">
            <p>БРЕНДЫ</p>
          </div>
          <form className="menu-bar-search">
            <input
              type="search"
              placeholder="Что вы ищете?"
              className="menu-bar-search-field"
            ></input>
            <img src={'/images/loupe.png'} alt="loupe" />
          </form>
          <div className="menu-bar-cart">
            <img src={'/images/man.png'} alt="man" />
            <img src={'/images/heard.png'} alt="heard" />
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};
