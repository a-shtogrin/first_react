import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import style from './Wrapper.module.scss';

export const PageWrapper = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
