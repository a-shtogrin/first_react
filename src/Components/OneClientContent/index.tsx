import React from 'react';
import { Link } from 'react-router-dom';
import { OneClientType } from 'Store/Clients/types';
import style from './OneClientContent.module.scss';

type OneClientContentPropsType = {
  oneClientData: OneClientType;
};

export const OneClientContent = ({ oneClientData }: OneClientContentPropsType) => {
  const { name, picture, id, email, phone, location, dob } = oneClientData;
  return (
    <div className={style.content}>
      <div className={style.container}>
        <Link to={'/clients'}> К списку клиентов</Link>
        <div className={style.client}>
          <h1>
            {name.title} {name.first} {name.last}
          </h1>
          <img src={picture.large} alt="img" />
          <div className={style.attributes}>
            <p>
              <span>id: </span>
              {id.value}
            </p>
            <p>
              <span>e-mail: </span>
              {email}
            </p>
            <p>
              <span>Телефон: </span>
              {phone}
            </p>
            <p>
              <span>Адрес: </span>
              {location.postcode} {location.country}, {location.state}, {location.city},{' '}
              {location.street.name} {location.street.number}
            </p>
            <p>
              <span>Возраст: </span>
              {dob.age}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// type OneClientContentPropsType = {
//   oneClientData: OneClientType[];
// };

// export const OneClientContent = ({ oneClientData }: OneClientContentPropsType) => {
//   const [results] = oneClientData;
//   return (
//       <div className={style.content}>
//         <div className={style.container}>
//           <Link to={'/clients'}> К списку клиентов</Link>
//           <div className={style.client}>
//             <h1>
//               {results.name.title} {results.name.first} {results.name.last}
//             </h1>
//             <img src={results.picture.large} alt="img" />
//             <div className={style.attributes}>
//               <p>
//                 <span>id: </span>
//                 {results.id.value}
//               </p>
//               <p>
//                 <span>e-mail: </span>
//                 {results.email}
//               </p>
//               <p>
//                 <span>Телефон: </span>
//                 {results.phone}
//               </p>
//               <p>
//                 <span>Адрес: </span>
//                 {results.location.postcode} {results.location.country}, {results.location.state},{' '}
//                 {results.location.city}, {results.location.street.name}{' '}
//                 {results.location.street.number}
//               </p>
//               <p>
//                 <span>Возраст: </span>
//                 {results.dob.age}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// };
