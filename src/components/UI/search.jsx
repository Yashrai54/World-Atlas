export const SearchFilter=({search,setSearch,filter,setFilter})=>{
    const handleInputChange=(event)=>{
      setSearch(event.target.value);
    }
    const handleSelectChange=(event)=>{
        setFilter(event.target.value)
    }
    return(
        <section className="search-section">
            <input type="text" placeholder="search" value={search} onChange={handleInputChange}></input>
            <select className="select-option" value={filter} onChange={handleSelectChange}>
                <option value="all">all</option>
                <option value="Asia">Asia</option>
                <option value="America">America</option>
                <option value="Africa">Africa</option>
            </select>
        </section>
    )
}