import { useParams } from "react-router"

import Header from "../components/Header"

export default function EmployeePage() {

    const { id } = useParams();

    console.log(id);

    return (
        <div className="employee-page">
            <Header text="Employee" />
        </div>
    )
}