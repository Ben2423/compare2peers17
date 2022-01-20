import closeBtn from '../../assets/closeBtn.svg'
import React, { useContext, useState } from 'react'
import { Context } from '../../pages/utils/providers/tagsdata'


export default function Tag({
    //functions
  

    //data
    tag,
    FilterTags


}) 
{
 
    function handleClick() {
        FilterTags(tag.label)
    }

    return (
    <div class="dropdown-menu" onClick={handleClick}>
        {tag.label}
        <img src={closeBtn} />
    </div>
    )
}