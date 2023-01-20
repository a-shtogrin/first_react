import React from 'react';
import style from './PaymentType.module.scss';
import { routes } from 'Helpers/Constans/routes';
import { Link } from 'react-router-dom';

export const PaymentType = () => {
  return (
    <div className={style.payment}>
      <div className={style.container}>
        <Link to={routes.main}> На главную страницу</Link>
        <h1>Оплата </h1>
        <div className={style.payment_cash}>
          <h2>
            <span>
              <strong>Оплата наличными</strong>:
            </span>
          </h2>
          <p>
            Производится при получении товара, после осмотра на предмет механических повреждений и
            заводского брака.
          </p>
        </div>

        <div className={style.payment_noncash}>
          <h2>
            <strong>Безналичный расчет</strong>:
          </h2>
          <h3>- для юр. лиц&nbsp;</h3>
          <p>
            оформите заказ через корзину, прикрепив карточку Вашей организации, на указанный e-mail
            будет выслан счёт для оплаты.
          </p>
          <h3>- для физ. лиц</h3>
          (актуально при заказах с регионов)
          <p>оплата производится на реквизиты организации приведенные ниже</p>
          <p>
            <strong>
              <em>Номер</em>
            </strong>{' '}
            <strong>
              <em>счета</em>
            </strong>
            <strong>
              <em>: 40702810438000182539</em>
            </strong>
          </p>
          <p>
            <strong>
              <em>Банк</em>
            </strong>{' '}
            <strong>
              <em>получателя</em>
            </strong>
            <strong>
              <em>: </em>
            </strong>
            <strong>
              <em>ПАО</em>
            </strong>{' '}
            <strong>
              <em>СБЕРБАНК</em>
            </strong>
          </p>
          <p>
            <strong>
              <em>БИК</em>
            </strong>
            <strong>
              <em>: 044525225</em>
            </strong>
          </p>
          <p>
            <strong>
              <em>Кор. счет: 30101810400000000225</em>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};
