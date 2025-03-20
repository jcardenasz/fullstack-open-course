import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    }
    const personExists = persons.find(person => person.name === newName || person.number === newNumber)
    personExists 
    ? alert(`"${newName}" or "${newNumber}" already added to phonebook`)
    : (
      setPersons(persons.concat(personObject)),
      setNewName(''),
      setNewNumber(''),
      console.log('person added: ', personObject)
    ) 
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input 
            value={newName} 
            onChange={handlePersonChange}
          />
        </div>
        <div>
          number: 
          <input 
            value={newNumber} 
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.id}>{person.name} - {person.number}</p>
      )}
    </div>
  )
}

export default App