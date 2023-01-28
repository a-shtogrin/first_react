import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main } from 'Containers/Main';
import { Payment } from 'Containers/Payment';
import { routes } from 'Helpers/Constans/routes';
import { NotFound } from 'Containers/NotFound';
import { Delivery } from 'Containers/Delivery';
import { Articles } from 'Containers/Articles';
import { Contacts } from 'Containers/Contacts';
import { Auth } from 'Containers/Auth';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.payment} element={<Payment />} />
      <Route path={routes.notFound} element={<NotFound />} />
      <Route path={routes.delivery} element={<Delivery />} />
      <Route path={routes.articles} element={<Articles />} />
      <Route path={routes.contacts} element={<Contacts />} />
      <Route path={routes.auth} element={<Auth />} />
    </Routes>
  );
}

export default App;
