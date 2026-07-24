import EmployeeList from "./EmployeeList"
import Header from "./Header"
import SearchBar from "./SearchBar"
import AddEmployee from "./AddEmployee"

import { useState } from "react"

function HomePage({ employees, setEmployees }) {

    const [filterText, setFilterText] = useState('')

    return (
        <div className="homepage">
            <Header />
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