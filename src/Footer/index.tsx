import React from 'react';
import './footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-lines">
          <div className="footer-lines-first">
            <div className="footer-lines-first-logo">
              <img src="/images/logo.png" alt="logo" />
              <p>© 2023 ggpromarket.ru Магазин который Вы искали</p>
            </div>
            <div className="footer-lines-first-mail">
              <p>
                <span>Склад</span>: г. Москва, ул. Салтыковская, 6 стр 11
              </p>
              <p>
                <span>E-mail</span>: zakaz@ggpromarket.ru
              </p>
            </div>
            <div className="footer-lines-first-net">
              <a href="">
                <img src="/images/telegramm.png" alt="telegramm" />
              </a>
              <a href="">
                <img src="/images/twitter.png" alt="twitter" />
              </a>
              <a href="">
                <img src="/images/instagram.png" alt="instagram" />
              </a>
            </div>
          </div>
          <div className='footer-lines-second'>
            <p>Все торговые марки принадлежат их владельцам. Копирование всех составляющих частей сайта в какой бы то ни было форме без письменного разрешения владельцев авторских прав запрещено. Сайт носит исключительно информационный характер, и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437(2) Гражданского кодекса Российской Федерации.Наличие и цены уточняйте у наших операторов.</p>
            <p>Сайт использует технологию cookie. Используя сайт, Вы соглашаетесь с <a href="" className='link'>правилами использования cookie</a>, а также даете <a href="" className='link'>согласие на обработку персональных данных. </a></p>
          </div>
        </div>
      </div>
    </div>
  );
};
