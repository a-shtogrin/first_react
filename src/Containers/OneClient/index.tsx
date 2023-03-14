import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClientEffects, ClientSelectors } from 'Store';
import { OneClientContent } from 'Components/OneClientContent';
import { useParams } from 'react-router-dom';

export const OneClient = () => {
  const { clientId } = useParams();
  const dispatch = useDispatch();
  const clientData = useSelector(ClientSelectors.getClientData);

  console.log(clientId);

  // useEffect(() => {
  //   if (clientId) {
  //     dispatch(ClientEffects.fetchOneClient(clientId));
  //   }
  // }, [clientId]);
  const index = clientData.findIndex(id => id.id.value === clientId)

  return <OneClientContent oneClientData={clientData[index]} />;
};
