import React, { useEffect, useState } from "react";

export const AppContext = React.createContext();



export const ContextProvider = ({ children }) => {
  const [searchedTicket, setSearchedTicket] = useState([])
  const [tickets, setTickets] = useState([])
  const [currentTicket, setCurrentTicket] = useState({})
  const [userDetails, setUserDetails] = useState({})
  const [generatedWallet, setGeneratedWallet] = useState({})
  const [searchTicketLoadingState, setSearchTicketLoadingState] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState(null)

  return (
    <>
      <AppContext.Provider value={{
        searchedTicket,
        setSearchedTicket,
        tickets,
        setTickets,
        currentTicket,
        setCurrentTicket,
        userDetails,
        setUserDetails,
        generatedWallet,
        setGeneratedWallet,
        searchTicketLoadingState,
        setSearchTicketLoadingState,
        loggedInUser,
        setLoggedInUser

      }}>
        {children}

      </AppContext.Provider>
    </>
  )
}