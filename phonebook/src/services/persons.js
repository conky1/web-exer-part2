import axios from 'axios'

/*const baseUrl = 'http://localhost:3000/api/persons''http://localhost:3000/api/persons'*/

export const baseUrl = '/api/persons'

export const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

export const create = async newObject => {
  const request = axios.post(baseUrl, newObject)
  const response = await request
  return response.data
}

export const update = async (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  const response = await request
  return response.data
}

export const remove = async (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  const response = await request
  return response.data
}


const exportVariables = {getAll, create, update, remove}
export default  exportVariables