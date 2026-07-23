import EmployeeList from "./EmployeeList"
import Header from "./Header"
import SearchBar from "./SearchBar"

import { useState } from "react"

function HomePage({ employees }) {

    const [filterText, setFilterText] = useState('')

    return (
        <div className="homepage">
            <Header />
            <SearchBar 
                filterText={filterText} 
                setFilterText={setFilterText} 
            />
            <EmployeeList 
                employees={employees} 
                filterText={filterText}
            />
        </div>
    )
}

export default HomePage