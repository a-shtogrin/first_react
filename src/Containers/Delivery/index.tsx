import React from 'react';
import { DeliveryList } from 'Components/Delivery';
import { CheckAuth } from 'Components/Common/CheckAuth';

export const Delivery = () => {
  return (
    <CheckAuth>
      <DeliveryList />
    </CheckAuth>
  );
};
