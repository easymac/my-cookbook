'use client'
import { createContext, useContext, useState } from 'react'

const MobilePanelContext = createContext({})

export const MobilePanelContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [openPercentage, setOpenPercentage] = useState(0)

  return (
    <MobilePanelContext.Provider value={{
      isOpen,
      setIsOpen,
      openPercentage,
      setOpenPercentage
    }}>
      {children}
    </MobilePanelContext.Provider>
  )
}

export const useMobilePanelContext = () => useContext(MobilePanelContext)
