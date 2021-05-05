import React from "react";
import "./style.css";

function TableHeader() {
    return (

        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone number</th>
                <th scope="col">Email</th>
                <th scope="col">DoB</th>
            </tr>
        </thead>

    );
}

export default TableHeader;