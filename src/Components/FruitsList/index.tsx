import React from 'react';
import style from './FruitList.module.scss';
import { routes } from 'Helpers/Constans/routes';
import { Link } from 'react-router-dom';
import { OneFruitType } from 'Store/Fruits/types';
import { ListItem } from './ListItem';

type FrutListPropsType = {
  fruitData: OneFruitType[]
}

export const FruitList = ({ fruitData }: FrutListPropsType) => {
  return (
    <div className={style.delivery}>
      <div className={style.container}>
        <div className={style.cards}>
          {fruitData.map((el) => (
            <ListItem
              key={el.id}
              name={el.name}
              genus={el.genus}
              id={el.id}
              family={el.family}
              order={el.order}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
