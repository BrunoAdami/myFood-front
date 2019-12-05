import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const ClientList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="CPF" />
      <EmailField source="adress" />
      <TextField source="phone" />
      <TextField source="email" />
    </Datagrid>
  </List>
);
