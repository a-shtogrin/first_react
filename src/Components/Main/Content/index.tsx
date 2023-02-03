import React from 'react';
import style from './Content.module.scss';
import { ProductCard } from './ProductCard';

export const Content = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
      <h1>Главная/ каталог товаров</h1>
        <div className={style.cards}>
          <ProductCard
            image={'/images/1-320x250.jpg'}
            name={'Смеситель для ванны с душем ПРОФСАН ПСМ-156-К65 СТАНДАРТ-А тип См-ВУДРНШлА'}
            code={'23235'}
            material={'латунь'}
            price={2500}
            color={'хром'}
          />
          <ProductCard
            image={'/images/2-320x250.jpg'}
            name={'Смеситель Lemark Expert LM5061S для кухонной мойки'}
            code={'23235'}
            material={'латунь'}
            price={1500}
            color={'хром'}
          />
          <ProductCard
            image={'/images/3-320x250.jpg'}
            name={'Смеситель Hansgrohe Focus E 31780000 для кухонной мойки'}
            code={'23235'}
            material={'латунь'}
            price={1350}
            color={'хром'}
          />
          <ProductCard
            image={'/images/4-320x250.jpg'}
            name={'Смеситель Rossinka W W35-23 для кухонной мойки'}
            code={'23235'}
            material={'латунь'}
            price={3350}
            color={'хром'}
          />
          <ProductCard
            image={'/images/4-320x250.jpg'}
            name={'Смеситель Rossinka W W35-23 для кухонной мойки'}
            code={'23235'}
            material={'латунь'}
            price={3350}
            color={'хром'}
          />
          <ProductCard
            image={'/images/4-320x250.jpg'}
            name={'Смеситель Rossinka W W35-23 для кухонной мойки'}
            code={'23235'}
            material={'латунь'}
            price={3350}
            color={'хром'}
          />
          <ProductCard
            image={'/images/4-320x250.jpg'}
            name={'Смеситель Rossinka W W35-23 для кухонной мойки'}
            code={'23235'}
            material={'латунь'}
            price={3350}
            color={'хром'}
          />
          <ProductCard
            image={'/images/4-320x250.jpg'}
            name={'Смеситель Rossinka W W35-23 для кухонной мойки'}
            code={'23235'}
            material={'латунь'}
            price={3350}
            color={'хром'}
          />
          <ProductCard
            image={'/images/4-320x250.jpg'}
            name={'Смеситель Rossinka W W35-23 для кухонной мойки'}
            code={'23235'}
            material={'латунь'}
            price={3350}
            color={'хром'}
          />
          <ProductCard
            image={'/images/4-320x250.jpg'}
            name={'Смеситель Rossinka W W35-23 для кухонной мойки'}
            code={'23235'}
            material={'латунь'}
            price={3350}
            color={'хром'}
          />
          <ProductCard
            image={'/images/4-320x250.jpg'}
            name={'Смеситель Rossinka W W35-23 для кухонной мойки'}
            code={'23235'}
            material={'латунь'}
            price={3350}
            color={'хром'}
          />
        </div>
      </div>
    </div>
  );
};
