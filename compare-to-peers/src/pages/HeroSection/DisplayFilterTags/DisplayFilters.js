import React, {useState, useContext} from 'react'
import { ContextTags } from '../../utils/providers/tagsdata'
import Filter from './FilterTag'

export default function DisplayFilters() {
    const {moreFiltersData} = useContext(ContextTags)

    return (
        <div >
        <div class="display-filter-area">
            {moreFiltersData.map(tag=> {
                return (
                    <Filter tag={tag} />
                )
            })}

        </div>
        
        
        </div>
        )
}