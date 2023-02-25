import React from 'react';
import { Link } from 'react-router-dom';
import { OneClientType } from 'Store/Clients/types';
import style from './ListItem.module.scss';

// type ListItemPropsType = {
//   first?: string;
//   last?: string;
//   title?: string;
//   phone?: string;
//   value?: string;
//   gender?: string;
//   email?: string;
//   medium?: string;
//   count?: number;
// };

export const ListItem = (props: OneClientType) => {
  const { email, name, phone, picture, id } = props;

  return (
    <div className={style.wrapper}>
      <img src={picture.thumbnail} alt="img" />
      <Link to={`/clients/${id.value}`}>
      <div className={style.name}>{name.title} {name.first} {name.last}</div>
      </Link>
      <div className={style.attributes}>
        <p>
          <span className={style.attribute}>id: </span>
          {id.value}
        </p>
        <p>
          <span className={style.attribute}>Телефон: </span>
          {phone}
        </p>
        <p>
          <span className={style.attribute}>Почта: </span>
          {email}
        </p>
      </div>
    </div>
  );
};
