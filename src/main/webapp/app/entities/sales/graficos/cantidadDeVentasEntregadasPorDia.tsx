import React, { PureComponent, useState } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios'

interface ServerData {
    cantidad: number
}

let listaConCantidad: Array<ServerData> = []
export default class VentasDelDiaEntregado extends PureComponent {
  
    consultarApi = async () => {
        await axios.request({
            url: "http://localhost:8080/api/ventasentregadasdeldia",
            auth: {
                username: 'admin',
                password: 'admin'
            }

        }).then((response) => {
            listaConCantidad = response.data

            this.setState(listaConCantidad)

        })

    }

    componentDidMount() {
        this.consultarApi()

    }

    render() {
        return (
     
            <>
                <BarChart
                    width={200}
                    height={400}
                    data={listaConCantidad}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" name="Ventas del dia de hoy"/>
       
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="cantidad" name="Cantidad de ventas entregadas del dia" fill="#2A6A9E" />
                </BarChart>
           
            </>
        
        )
    };
}