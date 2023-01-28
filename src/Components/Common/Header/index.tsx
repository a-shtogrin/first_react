import React from 'react';
import style from './Header.module.scss';
import { Cart } from './Cart';
import { Search } from './Search';
import { routes } from 'Helpers/Constans/routes';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.top}>
          <Link to={routes.main}>
            <img className={style.top_logo} src={'/images/logo.png'} alt="logo" />
          </Link>
          <ul className={style.top_list}>
            <li>
              <Link to={routes.payment}>Оплата</Link>
            </li>
            <li>
              <Link to={routes.delivery}>Доставка</Link>
            </li>
            <li>
              <Link to={routes.articles}>Статьи</Link>
            </li>
            <li>
              <Link to={routes.contacts}>Контакты</Link>
            </li>
          </ul>
        </div>
        <div className={style.menu}>
          <div className={style.menu_catalog}>
            <a href="">
              <img src={'/images/burger.png'} alt="burger" />
            </a>
            <p>КАТАЛОГ ТОВАРОВ</p>
          </div>
          <div className={style.menu_stocks}>
            <p>АКЦИИ</p>
          </div>
          <div className={style.menu_brends}>
            <p>БРЕНДЫ</p>
          </div>
          <Search />
          <div className={style.menu_cart}>
            <Link to={routes.auth}>
              <img src={'/images/man.png'} alt="man" />
            </Link>
            <Cart />
          </div>
        </div>
        <div className={style.navigate}>
          <button type="button" onClick={() => navigate(-1)}>
            назад
          </button>
          <button type="button" onClick={() => navigate(1)}>
            вперед
          </button>
        </div>
      </div>
    </div>
  );
};
