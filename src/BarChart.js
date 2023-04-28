import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Total Students', 'Average Score', 'Min Score', 'Max Score', 'Between 0 and 5', 'Between 5 and 10'],
  datasets: [
    {
      label: 'Analytics',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: '#00e600',
      borderColor: '#000000',
      borderWidth: 1.5,
      fill: false,
      tension: 0.1
    },
  ],
};

const options = {
  scales: {
    x: {
        ticks: {
          color: 'black'
        },
        grid: {
          color: 'rgba(255, 0, 0, 0.2)' // change the color of x-axis gridlines
        }
      },
      y: {
        ticks: {
          color: 'black' // change the color of y-axis labels
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.2)' // change the color of y-axis gridlines
        }
      }
    
  },
};

const BarChart = (props) => {

    const payload = props.payload_data
    console.log('from barchart>>>',payload)
    data.datasets[0].data = payload

 
 return(   

<div style={{ width: '400px', height: '220px', marginLeft:'80px', marginTop:'30px', backgroundColor:'white' }}>
    <Bar data={data} options={options} />
  </div>)
  
};

export default BarChart;
