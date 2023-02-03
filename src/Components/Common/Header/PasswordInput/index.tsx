import React, { ChangeEvent, useState } from 'react';
import style from './PasswordInput.module.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';

type InputProps = {
  value?: string;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  className?: string;
};

export const PasswordInput = ({
  changeHandler,
  value,
  placeholder,
  className = 'init',
}: InputProps) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={style.wrapper}>
      {
      isShow
      ? (
        <FiEyeOff className={style.wrapper_eye} onClick={() => setIsShow(!isShow)} />
      )
      : (
        <FiEye className={style.wrapper_eye} onClick={() => setIsShow(!isShow)} />
      )}
      <input
        type={isShow ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
        className={className}
      ></input>
    </div>
  );
};
