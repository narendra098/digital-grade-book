import { Button, TextField} from "@mui/material";
import "./HomePage.css";
import ResultTable from "./ResultTable";
import Header from "./Header";
import { useState } from "react";
import StudentData from "./Data";
import Analytics from "./Analytics";


const HomePage = () => {
  const [data, setData] = useState(StudentData);
  const [selectData, setselectData] = useState(StudentData);
  const [searchName, setSearchName] = useState('');



// Function to filter students by name
const searchStudents = (event) => {
    const searchName = event.target.value;
    setSearchName(searchName);
    if(searchName === ''){
      setselectData(data)
    }
    else{
    const filteredStudents = data.filter(student => student.Name.toLowerCase().includes(searchName.toLowerCase()));
    if(filteredStudents.length == 0){
      setselectData([{}])
    }
    else{
    setselectData(filteredStudents);
    }
    
  }
};

  const All = () => {
  // Function to shuffle the data
    setselectData(data);

  }

  const sortAtoZ = () => {
    
    const sortedAtoZData = [...data].sort((a, b) => {
      const nameA = a.Name.toUpperCase();
      const nameB = b.Name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setselectData(sortedAtoZData);
    
  };

  

  const sort1to10 = () => { 
    const sortedStudentData = [...data].sort((a, b) => b.final_grade - a.final_grade);
    setselectData(sortedStudentData);
  }

  const passed = () => {  
    const passedStudents = [...data].filter(student => student.status === 'Passed');
    setselectData(passedStudents);
  }

  const failed = () => {
    const failedStudents = data.filter(student => student.status === 'Failed');
    setselectData(failedStudents);

  }

 
  return (
    <div className="digital-grade-book-parent">

      <center className="digital-grade-book">DIGITAL GRADE BOOK</center>
      
      <Header />
      
      <div className="header-menu">

      <Button
        className="btn"
        size="small"
        variant="contained"
        name="all-btn"
        color="primary"
        onClick={All}
      >
      all
      </Button>

      <Button
        className="btn"
        size="small"
        variant="contained"
        color="primary"
        onClick={sortAtoZ}
      >
      a-z
      </Button>

      <Button
        className="btn"
        size="small"
        variant="contained"
        color="primary"
        onClick={sort1to10}
      >
      1-10
      </Button>

      <Button
        className="btn"
        size="small"
        variant="contained"
        color="primary"
        onClick={passed}
      >passed </Button>

      <Button
        className="btn"
        variant="contained"
        color="primary"
        onClick={failed}
      > failed </Button>

      <TextField
        className="search"
        sx={{ width: 197, color: 'white' }}
        color="primary"
        variant="standard"
        type="text"
        label="search"
        placeholder="search"
        size="medium"
        margin="none"
        onChange={searchStudents}
        value={searchName}
        
      />
    </div>
    
    
    <ResultTable Studentsdata={selectData} />

    <Analytics />
   
    
    
    </div>
  );
};

export default HomePage;
