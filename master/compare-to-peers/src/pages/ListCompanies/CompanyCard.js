import React, {useState} from 'react'


export default function CompanyCard ({
    
    
    company

}) {

  
    
    return (
        <div class="company-card">
            <div class="company-header">
                <div>
                    <img  class="image" src={company.companyPhoto} />
                </div>
            </div>
            <div class="company-card-body">

                <div class="try-moving-image">
                <img  class="profile-image" src={company.companyPhoto} />
                </div>
                <div class="card-body-text">
                    <h3>{company.companyName}</h3>
                    <p>{company.companySummary}WeFunder is a platform that does a lot of things for a lot of companies</p>
                        <div class="money-raised-tag">
                        <p>${company.raise} Raised</p>
                        </div>
                        <div class="link-text">
                        </div>
                </div>
            </div>
        </div>
        
    )
}