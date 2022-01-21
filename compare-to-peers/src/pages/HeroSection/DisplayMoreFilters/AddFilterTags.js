//dependencies 
import React, {useState, useContext} from 'react'
import { ContextTags } from '../../utils/providers/tagsdata'

import DropDownItem from '../DisplayIndustryTags/Dropdownitem'

export default function AddFilter () {
    const [display, resetDisplay] = useState('display-off')

    const {filterMoreFilters, FilterTags, addTagFromDropDown} = useContext(ContextTags)

    function handleChange () {
        if (display == 'display-on') {
        resetDisplay('display-off')
        }
        else resetDisplay('display-on')
    }


    return (
        <div> 
         <div className={display}>
        {filterMoreFilters.map(tag=> {
            return (
                <DropDownItem tag={tag} addTagFromDropDown={addTagFromDropDown} FilterTags={FilterTags}/>
            )
        })}

    </div>
    
        
        </div>
    )
}