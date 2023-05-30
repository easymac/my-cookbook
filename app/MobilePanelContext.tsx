'use client'
import { createContext, useContext, useState } from 'react'

const MobilePanelContext = createContext({})

export const MobilePanelContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MobilePanelContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobilePanelContext.Provider>
  )
}

export const useMobilePanelContext = () => useContext(MobilePanelContext)
