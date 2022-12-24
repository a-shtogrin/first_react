import React, { ChangeEvent, useState } from 'react';
import './input.css';

export const Input = () => {
  const [value, setValue] = useState('')

  const changeHadler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }
  return (
        <div className ="input_wrapper">
            <h2>{`INPUT VALUE : ${value}`}</h2>
            <input value ={value} className="Input" onChange={changeHadler} />
        </div>
  );
}
