import EmployeeList from "../components/EmployeeList"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import AddEmployee from "../components/AddEmployee"

import { useState } from "react"

function HomePage({ employees, setEmployees }) {

    const [filterText, setFilterText] = useState('')

    return (
        <div className="homepage">
            <Header text="Employee Directory" />
            <SearchBar 
                filterText={filterText} 
                setFilterText={setFilterText} 
            />
            <AddEmployee 
                setEmployees={setEmployees} 
            />
            <EmployeeList 
                employees={employees} 
                filterText={filterText}
            />
        </div>
    )
}

export default HomePage