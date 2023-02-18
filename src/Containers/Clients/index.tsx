import React, { useEffect } from 'react';
import { CheckAuth } from 'Components/Common/CheckAuth';
import { useDispatch, useSelector } from 'react-redux';
import { ClientEffects, ClientSelectors } from 'Store';
import { ClientList } from 'Components/FruitsList';

export const Clients = () => {
  const loading = useSelector(ClientSelectors.getClientLoading);
  const clientData = useSelector(ClientSelectors.getClientData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ClientEffects.fetchClients());
  }, []);

  return loading ? (
    <h1>Loading..</h1>
  ) : (
    <CheckAuth>
      <ClientList clientData={clientData}/>
    </CheckAuth>
  );
};
