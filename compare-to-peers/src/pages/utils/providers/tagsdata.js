import React, { createContext, useEffect, useState } from 'react'



//select Industry tags JsonData
import filteredTags from '../../../data/industryTags.json/filteredIndustryTags.json'
import selectTags from '../../../data/industryTags.json/selectedIndustryTags.json'



export const ContextTags = createContext()




const Provider = ({ children }) => {
 
	const [filteredTagsData, setfilteredTagsData] = useState(filteredTags)
    const [selectIndustryTags, setSelectIndustryTags] = useState(selectTags)


    function addTagFromDropDown (newLabel){
        let copy = [...selectIndustryTags]
        let lastLabel = copy.at(-1), idLabel
        if(lastLabel) { idLabel = lastLabel.id + 1 } 
        else { idLabel = 1 }
        copy = [...copy, { id: idLabel, label: newLabel, active: false}];
        setSelectIndustryTags(copy);
    }

    function FilterTags (remainingTag) {
        let filter = filteredTagsData.filter(company => {
            return company.label != remainingTag
          })
          setfilteredTagsData(filter)   
    }
	
    const value= {
        filteredTagsData,
        selectIndustryTags,
        addTagFromDropDown,
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