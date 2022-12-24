import React, { useState } from 'react';
import './counter.css';

type CounterPropsType = {
  title: string;
  count?: number;
};
/* //? - свойство не обязательное */
export const CounterComponent = (props: CounterPropsType) => {
  const { title } = props;

  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="counter_wrapper">
      <h1>{title}</h1>
      <div className='counter_group'>
        <button disabled ={count === 0} onClick={decrementHandler}>remove</button>
        <h2>{count}</h2>
        <button onClick={incrementHandler}>add</button>
      </div>
    </div>
  );
};
