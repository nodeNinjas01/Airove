import axios from 'axios'
import { decode } from 'html-entities'

let USERFROMLS = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null


const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_DEV_API,
  headers: {

    // Authorization: `Bearer${USERFROMLS.access}`
  },
})



instance.interceptors.response.use(
  (res) => {
    const api_response = decode(JSON.stringify(res))
    return JSON.parse(api_response)
  },
  async (err) => {
    const error = err.config

    if (err.response) {
      if (err.response.status === 401) {
        localStorage.removeItem('user')
        window.location.href = '/'

        return instance(error)
      }
    }

    return Promise.reject(err)
  }
)


export const API = instance