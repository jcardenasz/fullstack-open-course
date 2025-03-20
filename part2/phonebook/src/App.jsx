import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: persons.length + 1,
      name: newName
    }
    const personExists = persons.find(person => person.name === newName)
    personExists 
    ? alert(`${newName} is already added to phonebook`)
    : (setPersons(persons.concat(personObject)),
    setNewName(''),
    console.log('person added:', personObject))
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName} 
            onChange={handlePersonChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.id}>{person.name}</p>
      )}
    </div>
  )
}

export default App