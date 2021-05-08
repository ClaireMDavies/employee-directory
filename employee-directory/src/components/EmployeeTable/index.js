import React from "react";
import "./style.css";
import Employee from "../Employee";




function EmployeeTable(props) {

    const [sortField, setSortField] = React.useState(null);

    let employees = props.data;

    let sortedEmployees  = [...employees];

    if (sortField !== null) {
        sortedEmployees.sort((a, b) => {
            if (a[sortField] < b[sortField]) {
                return -1;
            }
            if (a[sortField] > b[sortField]) {
                return 1;
            }
            return 0;
        });
    }



    return (

        <table className="table table-striped">


            <thead>
                <tr>
                    <th ></th>
                    <th > First Name</th>
                    <th > Last Name</th>
                    <th >Email Address</th>
                    <th >Date of Birth</th>
                    <th >Office Phone</th>
                    <th >Mobile Phone</th>
                </tr>
            </thead>
            <tbody>
                
                {sortedEmployees.map(employee => (
                    <Employee key={employee.id} employee={employee} />
                ))}
               
            </tbody>
        </table>
    );
}

export default EmployeeTable;


