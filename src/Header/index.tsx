import React from 'react';
import './header.css';
import { Cart } from './Cart';
import { Search } from './Search';

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="top-bar">
          <img src={'/images/logo.png'} alt="logo" />
          <div className="top-menu-city">
            <img src={'/images/pin.png'} alt="pin" />
          </div>
          <div className="top-bar-phone">
            <p>8 495 018-32-10</p>
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
            <a href="">
              <img src={'/images/burger.png'} alt="burger" />
            </a>
            <p>КАТАЛОГ ТОВАРОВ</p>
          </div>
          <div className="menu-bar-stocks">
            <p>АКЦИИ</p>
          </div>
          <div className="menu-bar-brends">
            <p>БРЕНДЫ</p>
          </div>
          <Search />
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
