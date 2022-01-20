import React, { createContext, useEffect, useState } from 'react'
import originalTags from '../../../data/industryTags.json/industryTags.json'

export const ContextTags = createContext()




const Provider = ({ children }) => {
 
		
	const [originalTagsData, setoriginalTagsData] = useState(originalTags) 

 


    function FilterTags (remainingTag) {
        console.log('tags data')
        let filter = originalTagsData.filter(company => {
            return company.label != remainingTag
          })
          setoriginalTagsData(filter)
          console.log(originalTags)
        
    }
	
  const value= {
      originalTagsData,
      FilterTags

	}

	return (
		<ContextTags.Provider value={value}>
			{children}
		</ContextTags.Provider>
	)
}

export default {
	Provider,
	Consumer: ContextTags.Consumer
}