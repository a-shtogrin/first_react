import React, { ChangeEvent, useEffect, useState } from 'react';
import style from './Auth.module.scss';
import { routes } from 'Helpers/Constans/routes';
import { Link } from 'react-router-dom';
import { Input } from 'Components/Common/Header/Input';

export const AuthForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const changeHandler =
    (fieldName: 'email' | 'password') => (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => {
        const newData = { ...prev };
        newData[fieldName] = event.target.value;
        return newData;
      });
    };

  const submitHandler = () => {
    if (formState.password.length < 5) {
      setErrorMessage('Пароль должен быть больше 4 символов ');
    } else {
      setErrorMessage('');
      console.log(formState, 'отправлено на сервер');
    }
  };

  useEffect(() => {
    if (formState.password.length < 5 && formState.password !== '') {
      setIsError(true);
      setErrorMessage('Пароль должен быть больше 4 символов');
    } else {
      setErrorMessage('');
    }
  }, [formState.password]);

  return (
    <div className={style.auth}>
      <div className={style.container}>
        <Link to={routes.main}> На главную страницу</Link>
        <div className={style.inputs}>
          <div className={style.inputs_fields}>
            <Input
              type="text"
              placeholder="Email"
              value={formState.email}
              className = {isError ? style.inputs_error : ''}
              changeHandler={changeHandler('email')}
            />
            <Input
              type="text"
              placeholder="Пароль"
              value={formState.password}
              className = {isError ? style.inputs_error : ''}
              changeHandler={changeHandler('password')}
            />
          </div>
          <button className={style.inputs_btn} type="button" onClick={submitHandler}>
            Войти
          </button>
          {errorMessage !== '' && <div className={style.error}>{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
};
