import React, { PureComponent, useState } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios'

interface ServerData {
    cantidad: number
}

let listaConCantidad: Array<ServerData> = []
export default class VentasDelDia extends PureComponent {
  
    consultarApi = async () => {
        await axios.request({
            url: "http://localhost:8080/api/ventasdeldia",
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
                    <Bar dataKey="cantidad" name="Cantidad de ventas del dia" fill="#6dcdea" />
                </BarChart>
           
            </>
        
        )
    };
}