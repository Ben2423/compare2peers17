import closeBtn from '../../../assets/closeBtn.svg'
import React, { useContext, useState } from 'react'
import { ContextTags } from '../../utils/providers/tagsdata'

export default function DropDownFilters ({

    tag

}
 
) {
    const {moreFilteredData, setfilteredMoreData, selectedFilterTags, setSelectFilterTags, UpdateCompanyCardsByIndustryTag} = useContext(ContextTags)

    const addTagFromDropDown = function (newLabel){
        let copy = [...selectedFilterTags]
        let lastLabel = copy.at(-1), idLabel
        if(lastLabel) { idLabel = lastLabel.id + 1 } 
        else { idLabel = 1 }
        copy = [...copy, { id: idLabel, label: newLabel, active: false}];
        setSelectFilterTags(copy);
    }

   
  
    const removeTag = function(id) {
        let filtered = moreFilteredData.filter(tagname => {
          return tagname.id != id
         })
         setfilteredMoreData(filtered)
       
    }

    const handleClick = function() {
        removeTag(tag.id)
        addTagFromDropDown(tag.label)
        UpdateCompanyCardsByIndustryTag(tag.label)
    }


return (

        <div class="dropdown-filter-menu" onClick={handleClick}>
            {tag.label}
        </div>

)

}