import axios from 'axios'

const patAuth = axios.create({
  baseURL: 'https://course-api.com',
  headers: {
    Accept: 'application/json',
  },
})

export default patAuth
