import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const RequestList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="date" />
      <TextField source="totalValue" />
      <EmailField source="paid" />
      <TextField source="ClientId" />
    </Datagrid>
  </List>
);
