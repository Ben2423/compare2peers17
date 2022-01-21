//dependencies 
import React, {useState, useContext} from 'react'
import { ContextTags } from '../utils/providers/tagsdata'

// imported pages

import DropDownItem from './DisplayIndustryTags/DropDownMenu'
import DropDownFilterItem from './DisplayMoreFilters/DropDownFilters'

export default function AddTags () {

    const {filteredTagsData, removeDropDown, addTagFromDropDown, moreFiltersData, selectIndustryTags, setSelectIndustryTags, FilterTags} = useContext(ContextTags)


// display dropdown menu when input box for 'select industry' or 'additional filters' is clicked

//change sass style to display on or off drop down items
    const [industryDropDownOptions, setIndustryDisplay] = useState('industry-dropDown-off')
    const [filtersDropDownOptions, setFiltersDisplay] = useState('filter-dropdown-off')


// handle dropdown display on or off when input box is clicked
    function handleIndustryDropDown () {
        if (industryDropDownOptions == 'industry-dropDown-on') {
            setIndustryDisplay('industry-dropDown-off')
        }
        else setIndustryDisplay('industry-dropDown-on')
    }

//additional filters dropdown display on or off if input box is clicked
    function handleMoreFiltersDropDown () {
        if (filtersDropDownOptions == 'filter-dropdown-on') {
            setFiltersDisplay('filter-dropdown-off')
        }
        else setFiltersDisplay('filter-dropdown-on')
    }


    return (
        <div class="input-area"> 
            <div class="input-sections">
                <p class="input-name">Select industry</p>
                <input placeholder="select industry" onClick={handleIndustryDropDown}/>
                <div className={industryDropDownOptions}>
                    {filteredTagsData.map(tag=> {
                        return (
                            <DropDownItem tag={tag} addTagFromDropDown={addTagFromDropDown} FilterTags={FilterTags}/>
                        )
                    })}
                </div>
             
            </div>
            

            <div  class="filter-section">
                <p class="input-name">Additional Filters</p>
                <input placeholder="additional filters" onClick={handleMoreFiltersDropDown} />
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