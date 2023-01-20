import React from 'react';
import style from './Articles.module.scss';
import { routes } from 'Helpers/Constans/routes';
import { Link } from 'react-router-dom';

export const ArticleList = () => {
  return (
    <div className={style.articles}>
      <div className={style.container}>
        <Link to={routes.main}> На главную страницу</Link>
        <h1>Статьи</h1>
        <h2>
          <span>
            <strong>Главное</strong>:
          </span>
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit ad perferendis amet
          nulla, commodi sequi? Consectetur quaerat dolor necessitatibus! Doloribus enim ullam
          assumenda molestiae impedit ex deserunt, est porro voluptatibus.
        </p>
      </div>
    </div>
  );
};
