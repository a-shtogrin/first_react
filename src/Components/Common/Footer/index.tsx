import React from 'react';
import style from './Footer.module.scss';
import { routes } from 'Helpers/Constans/routes';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.lines}>
          <div className={style.lines_first}>
            <div className={style.lines_first_logo}>
              <Link to={routes.main}>
                <img className={style.top_logo} src={'/images/logo.png'} alt="logo" />
              </Link>
              <p>© 2023 ggpromarket.ru Магазин который Вы искали</p>
            </div>
            <div className={style.lines_first_mail}>
              <p>
                <span>Склад</span>: г. Москва, ул. Салтыковская, 6 стр 11
              </p>
              <p>
                <span>E-mail</span>: zakaz@ggpromarket.ru
              </p>
            </div>
            <div className={style.lines_first_net}>
              <a href="tg://resolve?domain=ggpromarket">
                <img src="/images/telegramm.png" alt="telegramm" />
              </a>
              <a href="whatsapp://send?text=Я с сайта GGproMarket&amp;phone=+79060346664">
                <img src="/images/twitter.png" alt="twitter" />
              </a>
              <a href="https://www.instagram.com/ggpromarket/">
                <img src="/images/instagram.png" alt="instagram" />
              </a>
            </div>
          </div>
          <div className={style.lines_second}>
            <p>
              Все торговые марки принадлежат их владельцам. Копирование всех составляющих частей
              сайта в какой бы то ни было форме без письменного разрешения владельцев авторских прав
              запрещено. Сайт носит исключительно информационный характер, и ни при каких условиях
              не является публичной офертой, определяемой положениями статьи 437(2) Гражданского
              кодекса Российской Федерации.Наличие и цены уточняйте у наших операторов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
