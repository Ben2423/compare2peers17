import closeBtn from '../../../assets/closeBtn.svg'
import React, { useContext, useState } from 'react'
import { Context } from '../../utils/providers/tagsdata'

export default function DropDownFilters ({

    tag,
    removeDropDown,
    addTagFromDropDown

}
 
) {

    function handleClick() {
        removeDropDown(tag.label)
        addTagFromDropDown(tag.label)
    }


return (

        <div class="dropdown-menu" onClick={handleClick}>
            {tag.label}
        </div>

)

}