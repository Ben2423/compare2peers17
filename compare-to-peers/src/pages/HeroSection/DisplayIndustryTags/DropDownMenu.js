import closeBtn from '../../../assets/closeBtn.svg'
import React, { useContext, useState } from 'react'
import { ContextTags } from '../../utils/providers/tagsdata'


export default function DropDownItem({
    tag,
}) 

{
  
    const {selectIndustryTags, setSelectIndustryTags, filteredTagsData, setfilteredTagsData} = useContext(ContextTags)
 
    const addTagFromDropDown = function (newLabel){
        let copy = [...selectIndustryTags]
        let lastLabel = copy.at(-1), idLabel
        if(lastLabel) { idLabel = lastLabel.id + 1 } 
        else { idLabel = 1 }
        copy = [...copy, { id: idLabel, label: newLabel, active: false}];
        setSelectIndustryTags(copy);
    }
  
  
    const removeTag = function(id) {
        console.log('this is working')
        let filtered = filteredTagsData.filter(tagname => {
          return tagname.id != id
         })
         setfilteredTagsData(filtered)
       
    }

    
    

    const handleClick = function() {
        console.log('handle click')
        removeTag(tag.id)
        addTagFromDropDown(tag.label)
    }

    return (
        <div class="dropdown-menu" onClick={handleClick}>
            {tag.label}
         </div>
    )
}