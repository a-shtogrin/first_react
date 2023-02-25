import React from 'react';
import { useSelector } from 'react-redux';
import { ClientSelectors } from 'Store';
import { OneClientContent } from 'Components/OneClientContent';
import { useParams } from 'react-router-dom';

export const OneClient = () => {
  const { clientId } = useParams();
  // const dispatch = useDispatch();
  const clientData = useSelector(ClientSelectors.getClientData);

  console.log(clientId);

  // useEffect(() => {
  //   if (clientId) {
  //     dispatch(ClientEffects.fetchOneClient(clientId));
  //   }
  // }, [clientId]);

  return <OneClientContent oneClientData={clientData} />;
};
