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

export const generateWallet = async () => {
  try {
    const response = await API.post('/generate-wallet')
    return response
  } catch (error) {
    return error

  }
}