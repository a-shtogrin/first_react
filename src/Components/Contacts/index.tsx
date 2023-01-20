import React from 'react';
import style from './Contacts.module.scss';
import { routes } from 'Helpers/Constans/routes';
import { Link } from 'react-router-dom';

export const ContactList = () => {
  return (
    <div className={style.contacts}>
      <div className={style.container}>
        <Link to={routes.main}> На главную страницу</Link>
        <h1>Контакты</h1>
        <h3>
          <span>
            <strong>
              Обращаем Ваше внимание что забрать товар на складе можно только после подтверждения
              менеджером! Мы не имеем выставочных образцов, склад работает только на отгрузку
              заказов!
            </strong>
            :
          </span>
        </h3>
        <div className={style.wrapper}>
          <div className={style.wrapper_adress}>
            <h4>АДРЕСА</h4>
            <p>г.Москва, ул.Салтыковская, 6с11 (склад)</p>
          </div>
          <div className={style.wrapper_time}>
            <h4>ВРЕМЯ РАБОТЫ</h4>
            <p>ПН - ПТ 10:00 - 19:00</p>
            <p>СБ - ВС ВЫХОДНОЙ</p>
          </div>
        </div>
      </div>
    </div>
  );
};
