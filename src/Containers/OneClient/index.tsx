import React, { useEffect } from 'react';
import { CheckAuth } from 'Components/Common/CheckAuth';
import { useDispatch, useSelector } from 'react-redux';
import { ClientEffects, ClientSelectors } from 'Store';
import { OneClientContent } from 'Components/OneClientContent';
import { useParams } from 'react-router-dom';

export const OneClient = () => {
  const { clientId } = useParams();
  const dispatch = useDispatch();
  const clientData = useSelector(ClientSelectors.getOneClientData);

  useEffect(() => {
    if (clientId) {
      dispatch(ClientEffects.fetchOneClient(clientId));
    }
  }, [clientId]);

  return <OneClientContent oneClientData={clientData} />;
};