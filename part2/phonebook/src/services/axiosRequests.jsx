import axios from 'axios'

const getAll = () => {
    return axios.get('http://localhost:3001/persons')
}

const create = (newObject) => {
    return axios.post('http://localhost:3001/persons', newObject)
}

const update = (id, newObject) => {
    return axios.put(`http://localhost:3001/persons/${id}`, newObject)
}

export default { getAll, create, update }