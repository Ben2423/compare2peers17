import React, {useState, useContext} from 'react'
import { ContextTags } from '../../utils/providers/tagsdata'
import Tag from '../Tag'

export default function DisplayTags() {
    const {selectIndustryTags, filteredTagsData} = useContext(ContextTags)

    return (
        <div >
        <div class="display-tags-area">
            {filteredTagsData.map(tag=> {
                return (
                    <Tag tag={tag} />
                )
            })}

        </div>
        
        
        </div>
        )
}