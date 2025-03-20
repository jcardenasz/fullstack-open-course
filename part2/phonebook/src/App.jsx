import { useState } from 'react'
import { Form } from './components/Form'
import { Filter } from './components/Filter'
import { Persons } from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const addFilter = (event) => {
    event.preventDefault()
    setAddFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    const personExists = persons.find(person => person.name === newName || person.number === newNumber)
    personExists 
    ? alert(`"${newName}" or "${newNumber}" already added to phonebook`)
    : (
      setPersons(persons.concat(personObject)),
      setNewName(''),
      setNewNumber('')
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

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value)
    const results = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setSearchResults(results)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        addFilter={addFilter}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <h2>Add a new</h2>
      <Form 
        addPerson={addPerson} 
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      {search
        ?<Persons persons={searchResults}/>
        :<Persons persons={persons}/>
      }
    </div>
  )
}

export default App