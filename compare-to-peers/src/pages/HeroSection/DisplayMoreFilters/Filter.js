import closeBtn from '../../../assets/closeBtn.svg'
import React, { useContext, useState } from 'react'
import { Context } from '../../utils/providers/tagsdata'
import { randomNumber } from "../../utils/providers"

export default function Filter({
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
        const colors = ['#F39519', '#F39519']
        let randomN = randomNumber(0,2)
        return colors[randomN]
    }
 
   


    return (
    <div class="tag-position-area">
        <div style={{backgroundColor: handleBgColor()}} class="tag-area" onClick={handleClick}>
            {tag.label}
            <img class="closeBtn" src={closeBtn} />
         </div>
    </div>
    )
}