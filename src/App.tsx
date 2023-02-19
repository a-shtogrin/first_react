/* eslint-disable no-lone-blocks */
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
import { PageWrapper } from 'Components/Common/PageWrapper';
import { Clients } from 'Containers/Clients';
import { OneClient } from 'Containers/OneClient';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<PageWrapper />}>
        <Route index element={<Main />} />
        <Route path={routes.clients} element={<Clients />} />
        <Route path={routes.oneClient} element={<OneClient />} />
        <Route path={routes.payment} element={<Payment />} />
        <Route path={routes.delivery} element={<Delivery />} />
        <Route path={routes.articles} element={<Articles />} />
        <Route path={routes.contacts} element={<Contacts />} />
        <Route path={routes.auth} element={<Auth />} />
      </Route>
      <Route path={routes.notFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;
