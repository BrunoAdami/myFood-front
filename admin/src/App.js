// in src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { ClientList } from './models/client';
import { DeliverList } from './models/deliver';
import { ProductList } from './models/product';
import { RequestList } from './models/request';
import { RestaurantList } from './models/restaurant';
import MyLayout from './MyLayout';

const dataProvider = jsonServerProvider('http://localhost:5000');

const App = () => (
  <Admin layout={MyLayout} dataProvider={dataProvider}>
    <Resource name="client" list={ClientList} />
    <Resource name="deliver" list={DeliverList} />
    <Resource name="product" list={ProductList} />
    <Resource name="request" list={RequestList} />
    <Resource name="restaurant" list={RestaurantList} />
  </Admin>
);

export default App;

// http://localhost:3000
// http://jsonplaceholder.typicode.com
