import React from 'react';
import style from './Header.module.scss';
import { Cart } from './Cart';
import { routes } from 'Helpers/Constans/routes';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserSelectors, UserSliceActions } from 'Store';
import { MenuSection } from './MenuSection';

export const Header = () => {
  const userEmail = useSelector(UserSelectors.getUserEmail);
  const navigate = useNavigate();
  const disppatch = useDispatch();

  const logoutHandler = () => {
    disppatch(UserSliceActions.clearUserData());
  };

  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.top}>
          <Link to={routes.main}>
            <img className={style.top_logo} src={'/images/logo.png'} alt="logo" />
          </Link>
        </div>
        <div className={style.menu}>
          <ul>
            <MenuSection className={style.menu_catalog} text="Каталог товаров" rout={routes.main} />
            <MenuSection className={style.menu_clients} text="Клиенты магазина" rout={routes.clients} />
            <MenuSection className={style.menu_payment} text="Оплата" rout={routes.payment} />
            <MenuSection className={style.menu_delivery} text="Доставка" rout={routes.delivery} />
            <MenuSection className={style.menu_articles} text="Статьи" rout={routes.articles} />
            <MenuSection className={style.menu_contacts} text="Контакты" rout={routes.contacts} />
          </ul>
          <div className={style.menu_cart}>
            {userEmail ? (
              <div className={style.wrapper}>
                <span className={style.name}>{userEmail}</span>
                <button type="button" onClick={logoutHandler}>
                  logout
                </button>
              </div>
            ) : (
              <Link to={routes.auth}>
                <img src={'/images/man.png'} alt="man" />
              </Link>
            )}
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

// return (
//   <div className={style.header}>
//     <div className={style.container}>
//       <div className={style.top}>
//         <Link to={routes.main}>
//           <img className={style.top_logo} src={'/images/logo.png'} alt="logo" />
//         </Link>
//         <ul className={style.top_list}>
//           <li>
//             <Link to={routes.payment}>Оплата</Link>
//           </li>
//           <li>
//             <Link to={routes.delivery}>Доставка</Link>
//           </li>
//           <li>
//             <Link to={routes.articles}>Статьи</Link>
//           </li>
//           <li>
//             <Link to={routes.contacts}>Контакты</Link>
//           </li>
//         </ul>
//       </div>
//       <div className={style.menu}>
//         <div className={style.menu_catalog}>
//           <a href="">
//             <img src={'/images/burger.png'} alt="burger" />
//           </a>
//           <p>КАТАЛОГ ТОВАРОВ</p>
//         </div>
//         <div className={style.menu_stocks}>
//           <p>АКЦИИ</p>
//         </div>
//         <div className={style.menu_brends}>
//           <p>БРЕНДЫ</p>
//         </div>
//         <Search />
//         <div className={style.menu_cart}>
//           {userEmail
//           ? <span className={style.name}>{userEmail}</span>
//            : <Link to={routes.auth}>
//               <img src={'/images/man.png'} alt="man" />
//             </Link>
//           }
//           <Cart />
//         </div>
//       </div>
//       <div className={style.navigate}>
//         <button type="button" onClick={() => navigate(-1)}>
//           назад
//         </button>
//         <button type="button" onClick={() => navigate(1)}>
//           вперед
//         </button>
//       </div>
//     </div>
//   </div>
// );
// };
