//dependencies 
import React, {useState, useContext} from 'react'
import { ContextTags } from '../utils/providers/tagsdata'

// imported pages

import DropDownItem from './DisplayIndustryTags/Dropdownitem'
import DropDownFilterItem from './DisplayMoreFilters/DropDownFilters'

export default function AddTags () {

    const {filteredTagsData, removeDropDown, addTagFromDropDown, moreFiltersData, selectIndustryTags, setSelectIndustryTags, FilterTags} = useContext(ContextTags)



    const [industryDropDownOptions, setIndustryDisplay] = useState('industry-dropDown-off')
    const [filtersDropDownOptions, setFiltersDisplay] = useState('filter-dropdown-off')

    function handleIndustryDropDown () {
        if (industryDropDownOptions == 'industry-dropDown-on') {
            setIndustryDisplay('industry-dropDown-off')
        }
        else setIndustryDisplay('industry-dropDown-on')
    }

    function handleMoreFiltersDropDown () {
        if (filtersDropDownOptions == 'filter-dropdown-on') {
            setFiltersDisplay('filter-dropdown-off')
        }
        else setFiltersDisplay('filter-dropdown-on')
    }

    const cancelTag = (id) => {
        let filtered = selectIndustryTags.filter(tagname => {
          return tagname.id != id
         })
         setSelectIndustryTags(filtered)
        
      }


    return (
        <div class="input-area"> 
            <div class="input-sections">
                <p class="input-name">Select industry</p>
                <input placeholder="select industry" onClick={handleIndustryDropDown}/>
                <div className={industryDropDownOptions}>
                    {filteredTagsData.map(tag=> {
                        return (
                            <DropDownItem tag={tag} addTagFromDropDown={addTagFromDropDown} cancelTag={cancelTag} FilterTags={FilterTags}/>
                        )
                    })}
                </div>
             
            </div>
            

            <div  class="filter-section">
                <p class="input-name">Additional Filters</p>
                <input placeholder="Additional Filter" onClick={handleMoreFiltersDropDown} />
            </div>
            <div className={filtersDropDownOptions}>
                {moreFiltersData.map(tag=> {
                    return (
                        <DropDownFilterItem tag={tag} removeDropDown={removeDropDown} addTagFromDropDown={addTagFromDropDown}/>
                    )
                })}
            </div>
        </div>
    )
}