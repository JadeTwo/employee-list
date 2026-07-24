function SearchBar({ filterText, setFilterText }) {

    return (
        <div className="searchbar">
            <input
                type="text"
                value={filterText}
                placeholder="search"
                onChange={(e) => setFilterText(e.target.value)}
            />
        </div>
    )
}

export default SearchBar