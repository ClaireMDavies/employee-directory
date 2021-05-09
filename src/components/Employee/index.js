import React from "react";
import moment from "moment";

const Employee = (props) => {

    return (
        <tr>
            <td><img src={props.employee.photoUrl} alt={props.employee.firstName + " " + props.employee.lastName} /></td>
            <td>{props.employee.firstName}</td>
            <td>{props.employee.lastName}</td>
            <td>{props.employee.emailAddress}</td>
            <td>{moment(props.employee.dateOfBirth).format("DD-MMM-YYYY")}</td>
            <td>{props.employee.officePhone}</td>
            <td>{props.employee.mobilePhone}</td>
        </tr>
    )
}

export default Employee;
