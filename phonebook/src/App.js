import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Search from './components/Search'
import PersonList from './components/PersonList'
import addNewPerson from './components/ServerCon'
import Notification from './components/Notification'


//import addNote from './components/AddNote'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newphone, setNewPhone] = useState('')
  const [searchName, setSearchName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {

    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        console.log(response.data)
      })


  }, [])
  // console.log('render', persons.length, 'persons')



  const formSubmit = (event) => {
    event.preventDefault()
    const filterDupArr = persons.filter(person => person.name.toLowerCase() === newName.toLowerCase())
    if (filterDupArr.length !== 0) {

      setErrorMessage(newName + ' is already added to phonebook')
      // alert(newName + ' is already added to phonebook')
      //console.log('button clicked', event.target)
    }
    else {
      const changeName = {
        name: newName,
        number: newphone
      }
      /* setPersons(persons.concat(changeName))
       setNewName('')
       setNewPhone('')*/
      addNewPerson(changeName, setPersons, setNewName, setNewPhone, persons)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      < Search searchName={searchName} setSearchName={setSearchName} />

      <Form formSubmit={formSubmit} newName={newName} newphone={newphone} setNewName={setNewName} setNewPhone={setNewPhone} />
      <h2>Numbers</h2>
      <PersonList searchName={searchName} persons={persons} setPersons={setPersons} />

    </div>
  )
}

export default App


