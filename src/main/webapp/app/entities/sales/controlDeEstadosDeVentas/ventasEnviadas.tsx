import React, { Fragment, useState, useEffect } from "react";
import UnaVenta from './unaVenta';
import axios from 'axios';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

export default function VentasEnviadas() {
  const [encargados, setEncargados] = useState([])
  const consultarApi = async () => {
    await axios.request({
      url: "http://localhost:8080/api/ventasenviadas",
      auth: {
        username: 'admin',
        password: 'admin'
      }
    }).then((response) => {
      setEncargados(response.data)
    })
  }
  useEffect(() => {
    consultarApi()
  }, [])
  return (

    <Table style={{ width: 1400 }}>
      <TableHead>
        <TableRow>
          <TableCell>Id de venta</TableCell>
          <TableCell>Fecha</TableCell>
          <TableCell>Estado</TableCell>
          <TableCell >Id de producto</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {encargados.map(celda => (
          <UnaVenta key={celda.id} props={celda} estado={"DELIVERED"} consultarApi={consultarApi} nombreBoton={"Entregado"} />
        ))}
      </TableBody>
    </Table>



  );
}