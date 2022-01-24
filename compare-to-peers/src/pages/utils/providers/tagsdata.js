import React, { createContext, useEffect, useState } from 'react'



//select Industry tags JsonData
import filteredTags from '../../../data/industryTags.json/filteredIndustryTags.json'
import selectTags from '../../../data/industryTags.json/selectedIndustryTags.json'

//select Additional Filters JsonData
import filteredMoreData from '../../../data/AddNewFilters/filteredNewFilters.json'
import selectedFilters from '../../../data/AddNewFilters/selectedFilters.json'

//Company Data
import companyData from '../../../data/CompanyData/companies.json'
import originalCompanyData from '../../../data/CompanyData/originalCompanyData.json'

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
    const [originalCompanyJsonData, setoriginalCompanyJsonData] = useState(originalCompanyData)



// display company cards based on industry tag
const UpdateCompanyCardsByIndustryTag = function (label) {
    let filtered = companyJsonData.filter(company => {
        let industries = company.industry
            if (industries) {
                return industries.includes(label)
            }
        })
        setcompanyJsonData(filtered)
}

const RedisplayCompaniesAfterCancelTag = function () {
    setcompanyJsonData(originalCompanyJsonData)
        if(selectIndustryTags.length == 1) {
            return
        }
    selectIndustryTags.filter(tag => {
        let filtered = companyJsonData.filter(company => {
            let industries = company.industry 
            return (industries.includes(tag.label))
        })
        setcompanyJsonData(filtered)
    })
}

//display company cards based on additional filters tags


function CancelFilter (tag) {
        
    let filtered = selectedFilterTags.filter(tagname => {
        return tagname.id != tag.id
       })
       setSelectFilterTags(filtered)
       console.log(filtered)
       console.log(selectedFilterTags.length)
}

const RedisplayCompaniesAfterCancelFilter = function () {
    if(selectedFilterTags.length == 1) {
            return
        }      
    selectedFilterTags.filter(tag => {
            let label = tag.label
            let filtered = companyJsonData.filter(company => {
                let industries = company.industry 
                return (industries.includes(label))
        })
       
        setcompanyJsonData(filtered)
    })
}



	
    const value= {
        filteredTagsData, 
        setfilteredTagsData,
        selectIndustryTags, 
        setSelectIndustryTags,
        moreFilteredData, 
        setfilteredMoreData,
        selectedFilterTags, 
        setSelectFilterTags,
        companyJsonData,
        setcompanyJsonData,

        originalCompanyJsonData,
        UpdateCompanyCardsByIndustryTag,
        RedisplayCompaniesAfterCancelTag,
        RedisplayCompaniesAfterCancelFilter,
        CancelFilter
      
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