function SearchBar({ filterText, setFilterText }) {

    return (
        <input 
            type="text" 
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
        />
    )
}

export default SearchBar