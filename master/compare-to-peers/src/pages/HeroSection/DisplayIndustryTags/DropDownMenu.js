import closeBtn from '../../../assets/closeBtn.svg'
import React, { useContext, useState } from 'react'
import { ContextTags } from '../../utils/providers/tagsdata'


export default function DropDownItem({
    tag,
}) 

{
  
    const {selectIndustryTags, setSelectIndustryTags, filteredTagsData, setfilteredTagsData, UpdateCompanyCardsByIndustryTag} = useContext(ContextTags)


    const addTagFromDropDown = function (newLabel){
        let copy = [...selectIndustryTags]
        let lastLabel = copy.at(-1), idLabel
        if(lastLabel) { idLabel = lastLabel.id + 1 } 
        else { idLabel = 1 }
        copy = [...copy, { id: idLabel, label: newLabel, active: false}];
        setSelectIndustryTags(copy);
    }
  
  
    const removeTag = function(id) {
        let filtered = filteredTagsData.filter(tagname => {
          return tagname.id != id
         })
         setfilteredTagsData(filtered)
       
    }

    

    const handleClick = function() {
        removeTag(tag.id)
        addTagFromDropDown(tag.label)
        UpdateCompanyCardsByIndustryTag(tag.label)
    }

    return (
        <div class="dropdown-menu" onClick={handleClick}>
            {tag.label}
         </div>
    )
}