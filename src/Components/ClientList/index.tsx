import React from 'react';
import style from './ClientList.module.scss';
import { routes } from 'Helpers/Constans/routes';
import { Link } from 'react-router-dom';
import { OneClientType } from 'Store/Clients/types';
import { ListItem } from './ListItem';

type ClientListPropsType = {
  clientData: OneClientType[];
};

export const ClientList = ({ clientData }: ClientListPropsType) => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <h1>Наши клиенты</h1>
        <div className={style.cards}>
          {clientData.map((el) => (
            <ListItem
              key={el.id.value}
              email={el.email}
              name={el.name}
              id={el.id}
              gender={el.gender}
              phone={el.phone}
              picture={el.picture}
              location={el.location}
              cell={el.cell}
              dob={el.dob}
              login={el.login}
              nat={el.nat}
              registered={el.registered}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
