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
                    <th scope="col"><button type="button" className="btn btn-outline-secondary" onClick={() => setSortField('firstName')}>First Name</button></th>
                    <th scope="col"><button type="button" className="btn btn-outline-secondary" onClick={() => setSortField('lastName')}>Last Name</button></th>
                    <th scope="col">Email Address</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Office Phone</th>
                    <th scope="col">Mobile Phone</th>
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


