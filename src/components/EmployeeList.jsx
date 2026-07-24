import EmployeeListItem from "./EmployeeListItem"

function EmployeeList({ employees, filterText }) {

    if (!employees) return <></>

    const filteredEmployees = employees.filter((emp) => 
        emp.name.toLowerCase().includes(filterText.toLowerCase())
    )

    return (
        <ul className="list">
            {filteredEmployees.map((employee) => 
                <EmployeeListItem 
                    employee={employee} 
                    key={employee.id}
                />
            )}
        </ul>
    )
}

export default EmployeeList