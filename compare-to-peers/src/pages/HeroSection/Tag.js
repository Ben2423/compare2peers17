import closeBtn from '../../assets/closeBtn.svg'
import React, { useContext, useState } from 'react'
import { Context } from '../../pages/utils/providers/tagsdata'
import { randomNumber } from "../utils/providers/"

export default function Tag({
    //functions
  

    //data
    tag,
    FilterTags,
    addTagFromDropDown


}) 
{
 
    function handleClick() {
        FilterTags(tag.label)
        addTagFromDropDown(tag.label)
    }

    function handleBgColor () {
        const colors = ['#FEB534','#FF9595']
        let randomN = randomNumber(0,2)
        return colors[randomN]
    }
 
   


    return (
    <div >
        <div style={{backgroundColor: handleBgColor()}} class="tag-area" onClick={handleClick}>
            {tag.label}
            <img class="closeBtn" src={closeBtn} />
         </div>
    </div>
    )
}