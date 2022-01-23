import React, {useContext, useState} from 'react'
import CompanyCard from './CompanyCard'
import { ContextTags } from '../utils/providers/tagsdata'

export default function ListCompanies ({

}) {

    const {companyJsonData} = useContext(ContextTags)
    console.log(companyJsonData)
    return (
        <div>
        
            <div id="company-display-area">
            {companyJsonData .map(company=> {
                return (
                    <CompanyCard company={company}/>
                )
            })}
                
            </div>
        
        </div>
    )
}