import React from 'react';
import style from './Delivery.module.scss';
import { routes } from 'Helpers/Constans/routes';
import { Link } from 'react-router-dom';

export const DeliveryList = () => {
  return (
    <div className={style.delivery}>
      <div className={style.container}>
        <Link to={routes.main}> На главную страницу</Link>
        <h1>Доставка </h1>
        <h2>
          <span>
            <strong>Самовывоз</strong>:
          </span>
        </h2>
        <p>
          Вы можете забрать товар самостоятельно с нашего склада: г.Москва, ул.Салтыковская, 6с11.
        </p>
        <p>
          О Вашем приезде необходимо сообщить заранее, связавшись с менеджером магазина. В этом
          случае мы сможем сформировать и собрать Ваш заказ в максимально короткий срок. Вам
          останется только забрать товар.
        </p>
      </div>
    </div>
  );
};
