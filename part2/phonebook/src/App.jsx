import { useEffect, useState } from 'react'
import axios from 'axios'
import axiosRequests from './services/axiosRequests'
import { Form } from './components/Form'
import { Filter } from './components/Filter'
import { Persons } from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    axiosRequests
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  console.log('persons: ', persons);

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
    const possibleUpdate = persons.find(person => person.name === newName)
    const personExists = persons.find(person => person.name === newName || person.number === newNumber)
    personExists 
    ? (
      alert(`"${newName}" or "${newNumber}" already added to phonebook`),
      window.confirm(`Would you like to update ${newName}'s number with a new one?`)
      ? (
        axiosRequests
          .update(possibleUpdate.id, personObject)
          .then(response => {
            setPersons(persons.map(person => person.id !== possibleUpdate.id ? person : response.data))
            console.log('person updated: ', response.data)
            console.log('update response: ', response)
          })
        ): console.log('update cancelled')
      )
    : (
      axiosRequests
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data)),
          setNewName(''),
          setNewNumber(''),
          console.log('person added: ', response.data),
          console.log('add response: ', response)
        })     
      ) 
  }

  const deletePerson = (id) => {
    const person = persons.find(person => person.id === id)
    const confirm = window.confirm(`Delete ${person.name}?`)
    confirm
    ? (
      axiosRequests
        .deletePersonRequest(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
          console.log('person deleted: ', person)
          console.log('delete response: ', response)
        })
      )
    : console.log('delete cancelled')
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
        ?<Persons persons={searchResults} deletePerson={deletePerson}/>
        :<Persons persons={persons} deletePerson={deletePerson}/>
      }
    </div>
  )
}

export default App