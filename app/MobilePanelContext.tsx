'use client'
import { createContext, useContext, useState } from 'react'


const MobilePanelContext = createContext({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => {},
})

export const MobilePanelContextProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MobilePanelContext.Provider value={{
      isOpen,
      setIsOpen,
    }}>
      {children}
    </MobilePanelContext.Provider>
  )
}

export const useMobilePanelContext = () => useContext(MobilePanelContext)
