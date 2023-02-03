import React, { ChangeEvent, useEffect, useState } from 'react';
import style from './Auth.module.scss';
import { routes } from 'Helpers/Constans/routes';
import { Link } from 'react-router-dom';
import { Input } from 'Components/Common/Header/Input';
import { useDispatch } from 'react-redux';
import { UserSliceActions } from 'Store';
import { users } from 'Helpers/Users/users';
import { PasswordInput } from 'Components/Common/Header/PasswordInput';

export const AuthForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  const dispatch = useDispatch();

  const emailRegExp =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const changeHandler =
    (fieldName: 'email' | 'password') => (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => {
        const newData = { ...prev };
        newData[fieldName] = event.target.value;
        return newData;
      });
    };

  const submitHandler = () => {
    if (formState.email === '' || formState.password === '') {
      setErrorMessage('Введи email или пароль!');
    } else if (
      users.find(
        (obj) => obj.email === formState.email.trim() && obj.password === formState.password.trim(),
      ) === undefined
    ) {
      setErrorMessage('Вход запрещен! Пользователь не зарегистрирован!');
    } else {
      setErrorMessage('');
      dispatch(UserSliceActions.setUserLoading(true));

      setTimeout(
        () => dispatch(UserSliceActions.setUserData({ email: formState.email, token: '123' })),
        2000,
      );
      console.log(formState, 'отправлено на сервер');
    }
  };

  useEffect(() => {
    if (formState.password.length < 5 && formState.password !== '') {
      setIsPassword(true);
      setErrorPassword('Пароль должен быть больше 4 символов');
    } else {
      setErrorPassword('');
      setIsPassword(false);
    }
  }, [formState.password]);

  useEffect(() => {
    if (!emailRegExp.test(formState.email) && formState.email !== '') {
      setIsEmail(true);
      setErrorEmail('Email не корректный');
    } else {
      setIsEmail(false);
      setErrorEmail('');
    }
  }, [formState.email]);

  return (
    <div className={style.auth}>
      <div className={style.container}>
        <Link to={routes.main}> На главную страницу</Link>
        <div className={style.inputs}>
          <div className={style.inputs_fields}>
            <Input
              type="email"
              placeholder="Email"
              value={formState.email}
              className={isEmail ? style.inputs_error : style.inputs_init}
              changeHandler={changeHandler('email')}
            />
            <PasswordInput
              placeholder="Пароль"
              value={formState.password}
              className={isPassword ? style.inputs_error : style.inputs_init}
              changeHandler={changeHandler('password')}
            />
          </div>
          <button className={style.inputs_btn} type="button" onClick={submitHandler}>
            Войти
          </button>
          {errorEmail !== '' && <div className={style.error}>{errorEmail}</div>}
          {errorPassword !== '' && <div className={style.error}>{errorPassword}</div>}
          {errorMessage !== '' && <div className={style.error}>{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
};
