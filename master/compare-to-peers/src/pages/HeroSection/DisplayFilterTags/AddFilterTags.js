//dependencies 
import React, {useState, useContext} from 'react'
import { ContextTags } from '../../utils/providers/tagsdata'

import DropDownItem from '../DisplayIndustryTags/DropDownMenu'

export default function AddFilter () {
    const [display, resetDisplay] = useState('display-off')

    const {moreFilteredData} = useContext(ContextTags)

    function handleChange () {
        if (display == 'display-on') {
        resetDisplay('display-off')
        }
        else resetDisplay('display-on')
    }


    return (
        <div> 
         <div className={display}>
        {moreFilteredData.map(tag=> {
            return (
                <DropDownItem tag={tag} addTagFromDropDown={addTagFromDropDown} />
            )
        })}

    </div>
    
        
        </div>
    )
}