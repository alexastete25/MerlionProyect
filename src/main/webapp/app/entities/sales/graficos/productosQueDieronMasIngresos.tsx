import React, { PureComponent, useState } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios'

 interface ServerData {
   name: string
   price: number
   total:number
 }
 let lista:Array <ServerData>=[]

export default class ProductosIngresos extends PureComponent {
  
  consultarApi = async () => {
      await axios.request({
  url: "http://localhost:8080/api/ventasmasingresos",
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
      <>
     
      <BarChart
        width={1100}
        height={400}
        data={lista}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price"  name ="Precio del producto" fill="#6dcdea" />
        <Bar dataKey="total" name="Monto total de las ventas" fill="#2A6A9E" />
      </BarChart>
     </>
    )};
}