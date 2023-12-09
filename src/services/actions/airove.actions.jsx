import { API } from "../../axios.config";



export const searchTickets = async (data) => {

  try {

    const response = await API.post('/search-ticket', data)
    console.log(response?.data?.tickets, 'Search response');

    return response?.data?.tickets

  } catch (error) {

    console.log(error);
    return error

  }
}


export const getTickets = async () => {
  try {
    const response = await API.get('/get-tickets')

    return response?.data?.userTickets

  } catch (error) {
    console.log(error);
    return error

  }
}