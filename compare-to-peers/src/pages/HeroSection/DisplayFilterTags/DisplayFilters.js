import React, {useState, useContext} from 'react'
import { ContextTags } from '../../utils/providers/tagsdata'
import Filter from './FilterTag'

export default function DisplayFilters() {
    const {selectedFilterTags} = useContext(ContextTags)

    return (
        <div >
        <div class="display-filter-area">
            {selectedFilterTags.map(tag=> {
                return (
                    <Filter tag={tag} />
                )
            })}

        </div>
        
        
        </div>
        )
}