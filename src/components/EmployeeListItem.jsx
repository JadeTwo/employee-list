import { Link, useNavigate } from "react-router"

function EmployeeListItem({ employee }) {

    const navigate = useNavigate();

    return (
        <li onClick={() => navigate(`/employee/${employee.id}`)}>
            <img src={employee.headshot} alt="" />
            <div>
                <p>{employee.name}</p>
                <p>{employee.title}</p>
            </div>
        </li>
    )
}

export default EmployeeListItem