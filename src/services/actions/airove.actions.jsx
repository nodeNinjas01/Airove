import { API } from "../../axios.config";

export let searchLoadingState;

export const searchTickets = async (data) => {

  try {
    const response = await API.post('/search-ticket', data)
    return response?.data?.tickets

  } catch (error) {
    return error

  }
}

export const getTickets = async () => {
  try {
    const response = await API.get('/get-tickets')
    return response?.data?.userTickets

  } catch (error) {
    return error
  }
}

export const generateWallet = async (formData, navigateFunction) => {
  try {

    const response = await API.post('/generate-wallet', formData)
 
    navigateFunction()
    const res = { ...response, res_status: true }


    return res
  } catch (error) {
    const err = { ...err, res_status: false }

    return err

  }
}



export const login = async (formData) => {
  try {
    const response = await API.post('/login', formData)
    const res = { ...response, res_status: true }
  


    return res
  } catch (error) {
    const err = { ...error, res_status: false }

    return err

  }
}