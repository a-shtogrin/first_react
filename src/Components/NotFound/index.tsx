import React from 'react';
import style from './Notfound.module.scss';

export const NoPage = () => {
  return (
    <div className={style.error}>
      <img src={'/images/404.png'} alt="notfound" />
    </div>
  );
};
