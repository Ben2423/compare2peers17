//dependencies 
import React, {useState, useContext} from 'react'
import { ContextTags } from '../utils/providers/tagsdata'

// imported pages
import Tag from './Tag'

export default function AddTags () {

    const {originalTagsData, FilterTags} = useContext(ContextTags)



    const [display, resetDisplay] = useState('display-off')
    
    function handleChange () {
        if (display == 'display-on') {
        resetDisplay('display-off')
        }
        else resetDisplay('display-on')
    }
    


    return (
        <div class="input-area"> 
            <div class="input-sections">
                <p class="input-name">Select industry</p>
                <input placeholder="select industry" onClick={handleChange}/>
                <div className={display}>
                    {originalTagsData.map(tag=> {
                        return (
                            <Tag tag={tag} FilterTags={FilterTags}/>
                        )
                    })}
                </div>
             
            </div>
            

            <div  class="input-sections">
                <p class="input-name">Additional Filters</p>
                <input placeholder="Additional Filter" />
            </div>
        </div>
    )
}