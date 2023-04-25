import Table from 'react-bootstrap/Table';

import "./ResultTable.css"

const ResultTable = (props)=>{
 
  const StudentData = props.Studentsdata;
 
// get table column
 const column = Object.keys(StudentData[0]);
 
 // get table heading data
 const ThData =()=>{
     return column.map((data)=>{
        return <th key={data}>{data}</th>
     })
 }
 
// get table row data
const tdData =() =>{
    
    return StudentData.map((data)=>{
       return(
           <tr>
                {
                   column.map((v)=>{
                       return <td>{data[v]}</td>
                   })
                }
           </tr>
       )
     })
}
 
 
  return (
      <Table striped bordered hover className='table'>
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </Table>
  )
}
export default ResultTable;