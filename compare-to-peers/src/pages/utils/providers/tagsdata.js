import React, { createContext, useEffect, useState } from 'react'



//select Industry tags JsonData
import filteredTags from '../../../data/industryTags.json/filteredIndustryTags.json'
import selectTags from '../../../data/industryTags.json/selectedIndustryTags.json'

//select Additional Filters JsonData
import filteredMoreData from '../../../data/AddNewFilters/filteredNewFilters.json'
import selectedFilters from '../../../data/AddNewFilters/selectedFilters.json'

//Company Data
import companyData from '../../../data/CompanyData/companies.json'

export const ContextTags = createContext()

const Provider = ({ children }) => {
 
    //***** this section is for selecting industry dropdown items and tags ***

    //json data for industry tags
	const [filteredTagsData, setfilteredTagsData] = useState(filteredTags)
    const [selectIndustryTags, setSelectIndustryTags] = useState(selectTags)

    //filterTags
    const [moreFilteredData, setfilteredMoreData] = useState(filteredMoreData)
    const [selectedFilterTags, setSelectFilterTags] = useState(selectedFilters)

    //companyDisplay
    const [companyJsonData, setcompanyJsonData] = useState(companyData)
 

	
    const value= {
        filteredTagsData, 
        setfilteredTagsData,
        selectIndustryTags, 
        setSelectIndustryTags,
        moreFilteredData, 
        setfilteredMoreData,
        selectedFilterTags, 
        setSelectFilterTags,
        companyJsonData
      
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