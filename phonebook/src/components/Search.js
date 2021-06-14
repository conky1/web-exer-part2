import React from 'react'

const Search = ({ searchName, setSearchName }) => {

    const handleSearch = (event) => {
        //const filterSearch = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
        console.log(event.target.value)
        setSearchName(event.target.value)
    }


    return (
        <div>
            filter with : <input value={searchName}
                onChange={handleSearch} />
        </div>
    )
}

export default Search