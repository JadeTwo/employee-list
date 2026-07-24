function EmployeeListItem({ employee }) {
    return (
        <li>
            <img src={employee.headshot} alt="" />
            <div>
                <p>{employee.name}</p>
                <p>{employee.title}</p>
            </div>
        </li>
    )
}

export default EmployeeListItem