'use client'
import { ChartBarIcon } from '@heroicons/react/24/outline';
import {  Quicksand } from 'next/font/google';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const options = {
    responsive: true,
    plugins: {
      legend:null,
      title: null,   
    
    },    
  };


const quicksand = Quicksand({ subsets: ["latin"] });

const RevenueChart = ({revenue}) => {

    const array = revenue.map(status => status.type_status) ?? [];

    
    const getOrderCount = (arr, value) => {
        return arr.filter((n) => n === value).length;
      };
    
      const [q1, q2, q3] = ['Required', 'Pickedup', 'Delivered'];
    
      const placed = getOrderCount(array, q1);
      const shipped = getOrderCount(array, q2);
      const delivered = getOrderCount(array, q3);
    
        const barColors = [
            '#ffc107',
            '#51b9d0',
            '#28a745',
          ];

    const data = {
        labels : ['Pendientes', 'Enviados', 'Entregados'],
        datasets: [
          {
            data: [placed, shipped, delivered],
            backgroundColor: barColors,
            borderRadius:36,
            barThickness: 40,
          },
        ],
      };

      

    return (
        <div className="w-full md:col-span-4">
      <h2 className={`${quicksand.className} mb-4 text-xl md:text-2xl font-semibold`}>
        Estadisticas de los servicios 
      </h2>
      <div className="rounded-xl bg-gray-100 p-4">
        
         {
            !array || array.length >= 1
            ? <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
                <Bar options={options} data={data}/>
              </div> 
            : <p className="mt-4 text-gray-400">Datos no disponibles</p>
         } 
        <div className="flex items-center pb-2 pt-6">
          <ChartBarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Grafica</h3>
        </div>
      </div>
    </div>
    );
}

export default RevenueChart;
