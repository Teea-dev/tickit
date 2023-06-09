import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

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
  cutout: 80,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: false,
      text: 'Ticket activity',
    },
  },
};

const labels = ['M', 'T', 'W', 'Th', 'F', 'S'];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderRadius: 20, 
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

export default function App() {
  return <Bar options={options} data={data} />;
}
