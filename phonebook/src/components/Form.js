import React from 'react'


const Form = ({ formSubmit, newName, newphone, setNewName, setNewPhone }) => {

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    return (

        <form onSubmit={formSubmit} >
            <div>
                <h2>Add a new</h2>
  Name: <input value={newName}
                    onChange={handleNameChange} /> <br></br>
    Number: <input value={newphone}
                    onChange={handlePhoneChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>

    )
}
export default Form