import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';


export default function VentaEntregada({ props }) {

    return (

        <TableRow >
            <TableCell>{props.id}</TableCell>
            <TableCell>{props.date}</TableCell>
            <TableCell>{props.state}</TableCell>
            <TableCell >{props.product_id}</TableCell>

        </TableRow>

    )
}