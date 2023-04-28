import React from 'react';
import Chart from "chart.js/auto";
import {Pie} from 'react-chartjs-2';
import "./PieChart.css"




const options = {
  responsive: true,
  maintainAspectRatio: false,
  width: 400,
  height: 400
};

export default class PieChart extends React.Component {
  
  render() {
    const payload = this.props.payload_data;

    console.log(payload)
    
    const state = {
      labels: ['Total Students', 'Average Score', 'Min Score',
               'Max Score', 'grade: 0-5', 'grade:5-10'],
      datasets: [
        {
          label: 'value',
          backgroundColor: [
            '#B21F00',
            '#C9DE00',
            '#2FDE00',
            '#00A6B4',
            '#6800B4',
            '#546D79'
          ],
          hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F',
          '#546D79'
          ],
          data: payload
        }
      ]
    }

    

    

    return (
      <div>
        <Pie 
          data={state}
          options={{
            title:{
              display:true,
              text:'Student result analytics',
              fontSize:20,
            },
            plugins:{legend: {
              display: false
            }},
            maintainAspectRatio:false  
          }}
          height="270px"
          width= "270px"

        />

        
      </div>
    );
  }
}