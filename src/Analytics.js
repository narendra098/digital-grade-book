import React from 'react'
import StudentData from "./Data"
import  "./Analytics.css"
import { useState } from "react";

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
  const toggleTable = () => {
    setShowTable(!showTable);
  };


  
  return (
    <div>
    <center><button className='showorhide-btn' onClick={toggleTable}>{showTable ? "Hide-Analytics" : "Show-Analytics"} Table</button></center>
    {showTable && (    
    <div className='analytics-table'>

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
    )}
  
  </div>)
}

export default Analytics