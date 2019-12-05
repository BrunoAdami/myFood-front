import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const DeliverList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="phone" />
      <TextField source="CNH" />
      <EmailField source="CPF" />
      <TextField source="name" />
      <TextField source="RG" />
    </Datagrid>
  </List>
);
