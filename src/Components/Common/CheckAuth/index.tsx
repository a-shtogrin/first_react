import { routes } from 'Helpers/Constans/routes';
import React, { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { UserSelectors } from 'Store';
import { Navigate } from 'react-router-dom';

type CheckAuthPropsType = {
  children: ReactNode;
};

export const CheckAuth: FC<CheckAuthPropsType> = ({ children }) => {
  const token = useSelector(UserSelectors.getUserToken);

  if (!token) {
    return <Navigate to={routes.auth} />;
  }
  return <>{children}</>;
};
