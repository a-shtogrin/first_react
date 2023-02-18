import React from 'react';
import { OneClientType } from 'Store/Clients/types';
import style from './OneClientContent.module.scss';

// type OneClientContentPropsType = {
//   name: {
//     title: string;
//     first: string;
//     last: string;
//   };
//   location: {
//     street: {
//       number: number;
//       name: string;
//     };
//     city: string;
//     state: string;
//     country: string;
//     postcode: string;
//   };
//   email: string;
//   registered: {
//     date: string;
//     age: number;
//   };
//   phone: string;
//   id: {
//     name: string;
//     value: string;
//   };
//   picture: {
//     large: string;
//     medium: string;
//     thumbnail: string;
//   };
// };

export const OneClientContent = (oneClientData: OneClientType) => {
    const { picture, name, email, id, phone, location, registered } = oneClientData;
  return (
    <div className={style.content}>
      <div className={style.container}>
        {/* <h1>{ name.title } {name.first} {name.last }</h1>
        <image href={picture.large}/>
        <div className={style.attributes}>
          <p>id:{id.value}</p>
          <p>phone:{phone}</p>
          <p>city:{location.city} country:{location.country} state:{location.state} street {location.street.name}</p> */}
          <p>{email}</p>
          {/* <p>age:{registered.date} date:{registered.date}</p>
        </div> */}
      </div>
    </div>
  );
};
