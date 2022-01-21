import closeBtn from '../../../assets/closeBtn.svg'
import React, { useContext, useState } from 'react'
import { ContextTags } from '../../utils/providers/tagsdata'

export default function Tag({
    //functions
  

    //data
    tag,


}) 
{

    const {selectIndustryTags, setSelectIndustryTags} = useContext(ContextTags)
 

  
    function cancelBtn (id) {
        let filtered = selectIndustryTags.filter(tagname => {
            return tagname.id != id
           })
           setSelectIndustryTags(filtered)
    }

    function handleCancelBtn (id) {
        
          
        }


    return (
    <div class="tag-position-area">
        <div class="tag-area" >
            {tag.label}
            <img class="closeBtn" src={closeBtn} onClick={handleCancelBtn(tag.id)}/>
         </div>
    </div>
    )
}