import React, { createContext, useEffect, useState } from 'react'



//select Industry tags JsonData
import filteredTags from '../../../data/industryTags.json/filteredIndustryTags.json'
import selectTags from '../../../data/industryTags.json/selectedIndustryTags.json'

//select Additional Filters JsonData
import filterMoreFilters from '../../../data/AddNewFilters/filteredNewFilters.json'



export const ContextTags = createContext()

const Provider = ({ children }) => {
 
    //***** this section is for selecting industry dropdown items and tags ***

    //json data for industry tags
	const [filteredTagsData, setfilteredTagsData] = useState(filteredTags)
    const [selectIndustryTags, setSelectIndustryTags] = useState(selectTags)

    console.log(selectTags)
    console.log(selectIndustryTags)
    
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

    // additional filters json DATA
    const [moreFiltersData, setfilterMoreFilters] = useState(filterMoreFilters)

    function removeDropDown (remainingTag)
    {
        let filter = moreFiltersData.filter(company => {
            return company.label != remainingTag
          })
          setfilterMoreFilters(filter)   
    }


	
    const value= {
        filteredTagsData,
        selectIndustryTags,
        FilterTags,
        setSelectIndustryTags,
        moreFiltersData,
        removeDropDown,
        addTagFromDropDown

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