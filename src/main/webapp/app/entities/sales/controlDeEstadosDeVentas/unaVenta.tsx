import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
export default function UnaVenta({ props, estado, consultarApi, nombreBoton }) {
  const enviar = async () => {
    await axios.request({
      method: "PUT",
      url: "http://localhost:8080/api/sales",
      auth: {
        username: 'admin',
        password: 'admin',
      },
      data: {
        id: props.id,
        date: props.date,
        product: { id: props.product_id },
        state: estado
      }
    }).then(() => consultarApi())

  }
  return (

    <TableRow >
      <TableCell>{props.id}</TableCell>
      <TableCell>{props.date}</TableCell>
      <TableCell>{props.state}</TableCell>
      <TableCell >{props.product_id}</TableCell>

      <TableCell >
        <Button style={{ backgroundColor: '#2196F3' }} variant="contained"
          onClick={enviar}>{nombreBoton}</Button>

      </TableCell>
    </TableRow>

  )
}