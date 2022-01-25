import closeBtn from '../../../assets/closeBtn.svg'
import React, { useContext, useState } from 'react'
import { ContextTags } from '../../utils/providers/tagsdata'

export default function Tag({
    //functions
  

    //data
    tag,


}) 
{

    const {selectIndustryTags, setSelectIndustryTags, filteredTagsData, setfilteredTagsData, companyJsonData,
        setcompanyJsonData,         RedisplayCompaniesAfterCancelTag} = useContext(ContextTags)
 

    const addTagToOriginalData = (newLabel) => {
        let copy = [...filteredTagsData]
        let lastLabel = copy.at(-1), idLabel
        if(lastLabel) { idLabel = lastLabel.id + 1 } 
        else { idLabel = 1 }
        copy = [...copy, { id: idLabel, label: newLabel, active: false}];
        setfilteredTagsData(copy);
      }

      
 
    function handleCancelBtn () {
        addTagToOriginalData(tag.label)
        let filtered = selectIndustryTags.filter(tagname => {
            return tagname.id != tag.id
           })
           setSelectIndustryTags(filtered)
           RedisplayCompaniesAfterCancelTag()
    }


    return (
    <div class="tag-position-area">
        <div class="tag-area" >
            {tag.label}
            <img class="closeBtn" src={closeBtn} onClick={handleCancelBtn}/>
         </div>
    </div>
    )
}