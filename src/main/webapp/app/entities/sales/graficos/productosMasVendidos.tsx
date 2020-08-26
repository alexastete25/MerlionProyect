import React, { PureComponent, useState } from 'react';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios'

 interface ServerData {
   name: string
   id: number
   cantidad:number
 }
 let lista:Array <ServerData>=[]

export default class ProductosMasVendidos extends PureComponent {
 
  consultarApi = async () => {
      await axios.request({
  url: "http://localhost:8080/api/ventasmasvendido",
  
  auth:{
    username:'admin',
    password:'admin'
  }

 }).then((response) => {
  lista=response.data
     this.setState(lista)
 })
        }
    
  componentDidMount (){
    this.consultarApi()
    
  }

  render() {
    return (
      <ComposedChart
        width={500}
        height={400}
        data={lista}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" name="Nombre del producto"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cantidad" name="Cantidad de ventas" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="name" name="Nombre del producto" stroke="#ff7300" />
      </ComposedChart>
    );
  }
}