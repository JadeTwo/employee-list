import { useParams, useNavigate } from "react-router"

import Header from "../components/Header"
import { useEffect } from "react";

export default function EmployeePage({ employees }) {

    const { id } = useParams();
    const navigate = useNavigate()

    // check if the employee data has arrived (from the fetch)
    const employee = employees ? employees.find((e) => e.id === Number(id)) : {}

    useEffect(() => {
        // if there is employee data but we can't find them then redirect
        if (employees && !employee) navigate('/')
    }, [employees])

    // no employee means invalid id so don't try to render
    if (!employee) return <></>

    return (
        <div className="employee-page">
            <Header text="Employee" />

            <div className="container">

                <div className="profile">
                    <img src={employee.headshot} alt={employee.name} />
                    <div>
                        <div>{employee.name}</div>
                        <div>{employee.title}</div>
                    </div>
                </div>

                <div className="details">
                    <div>
                        <div>Phone Number</div>
                        <div>{employee.phone}</div>
                    </div>

                    <div>
                        <div>Email</div>
                        <div>{employee.email}</div>
                    </div>

                    <div>
                        <div>Employee ID</div>
                        <div>{employee.id}</div>
                    </div>
                </div>

            </div>

        </div>
    )
}