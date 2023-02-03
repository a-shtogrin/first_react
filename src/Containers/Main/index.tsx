import React from 'react';
import { Content } from 'Components/Main/Content';
import { CheckAuth } from 'Components/Common/CheckAuth';

export const Main = () => {
  return (
    <CheckAuth>
      <Content />
    </CheckAuth>
  );
};
