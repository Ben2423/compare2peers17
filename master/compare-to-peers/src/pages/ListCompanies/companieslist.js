import React, {useContext, useState} from 'react'
import CompanyCard from './CompanyCard'
import { ContextTags } from '../utils/providers/tagsdata'
import { Context } from '../utils/providers/context'



export default function ListCompanies ({

}) {

    const {raiseValues} = useContext(Context)
    const {companyJsonData} = useContext(ContextTags)

function renderCompanies(){
        let items = []
        if(companyJsonData.length > 0){
            for(const company of companyJsonData){
                if(company.raise >= raiseValues[0] && company.raise <= raiseValues[1]){
                    items.push(
                        <CompanyCard company={company}/>
                    )
                }
            }
        }
        if(items.length === 0) return <p>No company found within that range! Try changing the range</p>
        return items
}

    return (
        <div>
        
            <div id="company-display-area">
                    {renderCompanies()}
            </div>
        
        </div>
    )
}