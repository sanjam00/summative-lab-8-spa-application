import { useState } from "react";

function SearchFilter({ handleSearch, ...props }) {
    const [value, setValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        handleSearch(value)
    }

    return (
        <div className="searchContainer">
            <form onSubmit={handleSubmit}>
                <input id="search-bar" type="text" placeholder="Search for a project" value={value} onChange={(e) => setValue(e.target.value)} />
            </form>
        </div>
    )
}

export default SearchFilter