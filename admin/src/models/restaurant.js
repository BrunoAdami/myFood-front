import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const RestaurantList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="score" />
      <TextField source="category" />
      <EmailField source="CNPJ" />
      <TextField source="name" />
      <TextField source="adress" />
    </Datagrid>
  </List>
);
