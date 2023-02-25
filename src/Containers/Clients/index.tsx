import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClientEffects, ClientSelectors } from 'Store';
import { ClientList } from 'Components/ClientList';

export const Clients = () => {
  const loading = useSelector(ClientSelectors.getClientLoading);
  const clientData = useSelector(ClientSelectors.getClientData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ClientEffects.fetchClients());
  }, []);

  return loading ? <h1>Loading..</h1> : <ClientList clientData={clientData} />;
};
