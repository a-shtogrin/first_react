import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

type InputProps = {
  value?: string;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  className?: string;
};

export const Input = ({ changeHandler, value, type = 'text', placeholder, className }: InputProps) => {
  return (
    <div className={style.wrapper}>
      <input type={type} placeholder={placeholder} value={value} onChange={changeHandler} className = {className}></input>
    </div>
  );
};
