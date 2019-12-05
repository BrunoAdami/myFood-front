import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const ProductList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="value" />
      <EmailField source="fabDate" />
      <TextField source="valDate" />
    </Datagrid>
  </List>
);
