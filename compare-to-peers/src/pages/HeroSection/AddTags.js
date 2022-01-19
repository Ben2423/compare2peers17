import styled from 'styled-components';
import React, {useState} from 'react'


export default function AddTags () {
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
                <div className={display} >hello</div>
             
            </div>
            

            <div  class="input-sections">
                <p class="input-name">Additional Filters</p>
                <input placeholder="Additional Filter" />
            </div>
        </div>
    )
}