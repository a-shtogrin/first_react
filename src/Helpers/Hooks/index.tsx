import { useState } from 'react';

export const useToggle = (initialValue: boolean) => {
  const [flag, setFlag] = useState(initialValue);

  const toggle = () => {
    setFlag((prev) => !prev);
  };

  const open = () => {
    setFlag(true);
  };

  const close = () => {
    setFlag(false);
  };
};
