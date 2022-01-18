import React, { createContext, useEffect, useState } from 'react'
export const Context = createContext()
const Provider = ({ children }) => {
		
	const [raiseValues, setRaiseValues] = useState([750000, 2000000]) // [min, max]
	
  const value = {
		raiseValues,
    handleRaiseValues: (min, max) => {
      setRaiseValues([min, max])
    }
	}

	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}

export default {
	Provider,
	Consumer: Context.Consumer
}