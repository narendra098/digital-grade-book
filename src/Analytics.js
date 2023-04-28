import React from 'react'
import StudentData from "./Data"
import  "./Analytics.css"
import { useState } from "react";
import PieChart from "./PieChart";
import { Pie } from 'react-chartjs-2';
import BarChart from './BarChart';
import "./Button.css"

function Analytics() {

  const totalStudents = StudentData.length;

    // Calculate average final grade
  const averageFinalGrade = StudentData.reduce((total, student) => total + student.final_grade, 0) / totalStudents;

  // Find max final grade
  const maxFinalGrade = Math.max(...StudentData.map(student => student.final_grade));

  // Find min final grade
  const minFinalGrade = Math.min(...StudentData.map(student => student.final_grade));

   // Filter students with final grade between 0 and 5
  const studentsWithFinalGradeBetween0And5 = StudentData.filter(student => student.final_grade >= 0 && student.final_grade <= 5);

  // Filter students with final grade between 5 and 10
  const studentsWithFinalGradeBetween5And10 = StudentData.filter(student => student.final_grade >= 5 && student.final_grade <= 10);
  
  const [showTable, setShowTable] = useState(false);

  // Function to toggle the visibility of the table
  const toggleTable = (e) => {
      
      setShowTable(!showTable);
    
      e.preventDefault();
      //reset animation
      e.target.classList.remove('animate');
      
      e.target.classList.add('animate');
      setTimeout(function(){
        e.target.classList.remove('animate');
      },700);
    
    
    var showorhide_btn = document.getElementsByClassName("bubbly-button");
    
    for (var i = 0; i < showorhide_btn.length; i++) {
      showorhide_btn[i].addEventListener('click', toggleTable, false);
    }

  };

  const analytics_data = [{
    'total_students':totalStudents,
    'average_score': averageFinalGrade.toFixed(2),
    'min_score': minFinalGrade,
    'max_score':maxFinalGrade,
    'grade_0_to_5':studentsWithFinalGradeBetween0And5.length,
    'grade_5_to_10':studentsWithFinalGradeBetween5And10.length
  }]

  const payload = [];
  analytics_data.forEach(item => {
      const values = Object.values(item);
      payload.push(...values);
    })
  console.log(payload)

  return (
    <div>
      
    
    <center><button className='bubbly-button' onClick={toggleTable}>{showTable ? "Hide-Analytics" : "Show-Analytics"} </button></center>
    <div style={{display:'flex'}}>
    {showTable && (  
    <>

    <div className='analytics-table' style={{marginRight:'80px'}}>
        
        <tr> 
        <th>status</th>
        <th>Count</th>
        </tr>

        <tr> 
        <td>All Students</td>
        <td>{totalStudents}</td>
        </tr>

        <tr> 
        <td>Average of All</td>
        <td>{averageFinalGrade.toFixed(2)}</td>
        </tr>

        <tr> 
        <td>Min of All</td>
        <td>{minFinalGrade}</td>
        </tr>

        <tr> 
        <td>Max of All</td>
        <td>{maxFinalGrade}</td>
        </tr>

        <tr> 
        <td>Final grade: 0-5</td>
        <td>{studentsWithFinalGradeBetween0And5.length}</td>
        </tr>


        <tr> 
        <td>Final grade: 5-10</td>
        <td>{studentsWithFinalGradeBetween5And10.length}</td>
        </tr>
    
        
    </div>  
    
    <PieChart payload_data={payload} style={{ marginLeft: '80px' }}/>
    
    <BarChart payload_data = {payload} />
    </>
    )}
  
  </div>
  </div>
  )
}

export default Analytics