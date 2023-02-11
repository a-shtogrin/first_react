import React, { useEffect } from 'react';
import { CheckAuth } from 'Components/Common/CheckAuth';
import { FruitList } from 'Components/FruitsList';
import { useDispatch, useSelector } from 'react-redux';
import { FruitEffects, FruitSelectors } from 'Store';

export const Fruits = () => {
  const loading = useSelector(FruitSelectors.getFruitLoading);
  const fruitData = useSelector(FruitSelectors.getFruitData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FruitEffects.fetchFruits());
  }, []);

  return loading ? (
    <h1>Loading..</h1>
  ) : (
    <CheckAuth>
      <FruitList fruitData={fruitData}/>
    </CheckAuth>
  );
};
