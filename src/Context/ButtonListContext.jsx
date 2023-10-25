import React, { createContext, useContext, useState } from 'react'

const ButtonListContext = createContext(null);
const ButtonListContextWrapper = ({ children }) => {
    const [topic, setTopic] = useState(null);
  return (
      <ButtonListContext.Provider value={{
        topic, setTopic
    }}>
      {children}
    </ButtonListContext.Provider>
  )
}
export default ButtonListContextWrapper;

export const useButtonListContextHomePage = () => {
    const context = useContext(ButtonListContext);
    if (!context) return null;
    return context;
}
