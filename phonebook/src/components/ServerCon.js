
import axios from 'axios'

const addNewPerson = (changeName, setPersons, setNewName, setNewPhone, persons) => {

    axios
        .post('http://localhost:3001/persons', changeName)
        .then(response => {
            setPersons(persons.concat(changeName))
            setNewName('')
            setNewPhone('')
        })
}


export default addNewPerson