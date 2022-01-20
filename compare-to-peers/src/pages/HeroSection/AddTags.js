//dependencies 
import styled from 'styled-components';
import React, {useState} from 'react'

//JSON data
import originalIndustryTags from '../../data/industryTags.json/industryTags.json'

// imported pages
import Tag from './Tag'

export default function AddTags () {
//original company tags data to be displayed via drop down
    const [originalDataTags, setOriginalDataTags] = useState(originalIndustryTags)


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
                    {originalDataTags.map(tag=> {
                        return (
                            <Tag tag={tag} />
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