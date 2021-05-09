import React from "react";
import Navbar from "./components/Navbar";
import EmployeeTable from "./components/EmployeeTable";
import axios from "axios";

function App() {
    const [employees, setEmployeeData] = React.useState([]);

  React.useEffect(() => {

    axios({
      'method': 'GET',
      'url': 'https://randomuser.me/api?results=20&nat=gb&seed=claire-bootcamp'
    }).then((response) => {
      let employees = response.data.results.map(employee => (
        {
          id: employee.login.uuid,
          firstName: employee.name.first,
          lastName: employee.name.last,
          photoUrl: employee.picture.thumbnail,
          emailAddress: employee.email,
          dateOfBirth: employee.dob.date,
          officePhone: employee.phone,
          mobilePhone: employee.cell
        }
      ));

      setEmployeeData(employees);
    });
  }, []);
  
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <EmployeeTable data = {employees}/>
            </div>
        </div>
    );
}

export default App;
