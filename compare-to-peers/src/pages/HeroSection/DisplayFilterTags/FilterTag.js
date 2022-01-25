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

    const {moreFilteredData, RedisplayCompaniesAfterCancelFilter, setfilteredMoreData, companyJsonData, setSelectFilterTags, setcompanyJsonData, originalCompanyJsonData, selectedFilterTags, CancelFilter} = useContext(ContextTags)


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
        
        //finding actual filter tags
        let _selectedFilterTags = [...selectedFilterTags]
        let _tag = _selectedFilterTags.find(element => element.id === tag.id)
        let indexOfTag = _selectedFilterTags.indexOf(_tag)
        _selectedFilterTags.splice(indexOfTag, 1)

        //finding companies that matches actual filter tags
        let _originalCompanyJsonData = [...originalCompanyJsonData]
        let companies = []
        if(_selectedFilterTags.length > 0){
            for(const values of _originalCompanyJsonData){
                if(values.industry){
                    let availableCompanies = 0
                    for(const industry of values.industry){
                        if(_selectedFilterTags.some(tag => tag.label === industry)){
                            availableCompanies++
                        }
                    }
                    if(availableCompanies === _selectedFilterTags.length){
                        companies.push(values)
                    }
                }
            }
            setcompanyJsonData([...companies])
        } else {
            //in case that there are not more selected tags, then sets the original list
            return setcompanyJsonData([..._originalCompanyJsonData])
        }
        
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