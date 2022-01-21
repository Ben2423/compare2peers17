import closeBtn from '../../../assets/closeBtn.svg'
import React, { useContext, useState } from 'react'
import { ContextTags } from '../../utils/providers/tagsdata'


export default function Tag({
    tag,
}) 

{
    const {addTagFromDropDown, FilterTags} = useContext(ContextTags)
 
    function handleClick() {
        FilterTags(tag.label)
        addTagFromDropDown(tag.label)
    }

    return (
        <div class="dropdown-menu" onClick={handleClick}>
            {tag.label}
         </div>
    )
}