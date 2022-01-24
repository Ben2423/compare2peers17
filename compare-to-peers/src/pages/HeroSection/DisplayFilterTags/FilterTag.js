import closeBtn from '../../../assets/closeBtn.svg'
import React, { useContext, useState } from 'react'
import { ContextTags } from '../../utils/providers/tagsdata'
import { randomNumber } from "../../utils/providers"

export default function Filter({
    //functions
  

    //data
    tag,
  


}) 
{

    const {moreFilteredData, RedisplayCompaniesAfterCancelFilter, setfilteredMoreData, selectedFilterTags, setSelectFilterTags, setcompanyJsonData, originalCompanyJsonData, CancelFilter} = useContext(ContextTags)


    const addTagToOriginalData = (newLabel) => {
        let copy = [...moreFilteredData]
        let lastLabel = copy.at(-1), idLabel
        if(lastLabel) { idLabel = lastLabel.id + 1 } 
        else { idLabel = 1 }
        copy = [...copy, { id: idLabel, label: newLabel, active: false}];
        setfilteredMoreData(copy);
      }

      
 
    function handleCancelBtn () {
        CancelFilter(tag)
        addTagToOriginalData(tag.label)
  
        // let filtered = selectedFilterTags.filter(tagname => {
        //     return tagname.id != tag.id
        //    })
        //    setSelectFilterTags(filtered)
           setcompanyJsonData(originalCompanyJsonData)
           
        //    RedisplayCompaniesAfterCancelFilter()
    }

    return (
    <div class="tag-position-area">
        <div  class="tag-area">
            {tag.label}
            <img class="closeBtn" src={closeBtn} onClick={handleCancelBtn} />
         </div>
    </div>
    )
}