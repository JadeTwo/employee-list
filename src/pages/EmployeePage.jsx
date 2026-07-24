import { useParams } from "react-router"

import Header from "../components/Header"

export default function EmployeePage({ employees }) {

    const { id } = useParams();

    const employee = employees.find((e) => e.id === Number(id))

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

            </div>

        </div>
    )
}