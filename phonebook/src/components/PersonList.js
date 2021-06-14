import React from 'react'
import personService from '../services/personService'

const PersonList = ({ persons, searchName, setPersons }) => {
    const nameToShow = searchName.length === 0
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))

    const handleOnClick = (id) => {
        personService.removePerson(id).then(response => {
            const personMap = persons.filter(person => person.id !== id);
            setPersons(personMap)
        })

    }

    return (
        nameToShow.map(person => <p key={person.name} >{person.name},{person.number}  <button onClick={(e) => {
            e.preventDefault()
            const confirmDelete = window.confirm("Delete " + person.name + "?");
            if (confirmDelete) handleOnClick(person.id)
        }}> Delete </button></p>
        )

    )
}
export default PersonList