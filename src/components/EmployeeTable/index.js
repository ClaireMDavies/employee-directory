import React from "react";
import "./style.css";
import Employee from "../Employee";

function EmployeeTable(props) {

    const [sortField, setSortField] = React.useState(null);
    const [filterField, setFilterField] = React.useState('firstName');
    const [filterValue, setFilterValue] = React.useState('');

    let employees = props.data;

    let sortedEmployees = [...employees];

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

    if (filterField.length > 0 && filterValue.length > 0) {
        sortedEmployees = sortedEmployees.filter(employee => employee[filterField].toLowerCase().includes(filterValue.toLowerCase()));
    }

    function updateFilterField(event) {

        let filterField = event.target.value;
        setFilterField(filterField);
        event.preventDefault();
    }

    function updateFilterValue(event) {

        let filterValue = event.target.value;

        setFilterValue(filterValue);
        event.preventDefault();
    }


    return (
        <div>
            <div className="searchBackground"> Search by

                <form> 
                    <select className="form-select" id="filterProperties" onChange={updateFilterField}>
                        <option className="option" value="firstName">First Name</option>
                        <option className="option" value="lastName">Last Name</option>
                        <option className="option" value="emailAddress">Email Address</option>
                        <option className="option" value="dateOfBirth">Date of Birth</option>
                        <option className="option" value="officePhone">Office Phone</option>
                        <option className="option" value="mobilePhone">Mobile Phone</option>
                    </select>
                    <input type="text" id="textField" onChange={updateFilterValue}></input>
                </form>

            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th ></th>
                        <th scope="col"><button type="button" className="btn btn-outline-secondary" onClick={() => setSortField('firstName')}>First Name</button></th>
                        <th scope="col"><button type="button" className="btn btn-outline-secondary" onClick={() => setSortField('lastName')}>Last Name</button></th>
                        <th scope="col"><button type="button" className="btn btn-outline-secondary" onClick={() => setSortField('emailAddress')}>Email Address</button></th>
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
        </div>
    );
}

export default EmployeeTable;


