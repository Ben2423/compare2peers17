import {Context} from '../utils/providers/context'
import React, { useContext, useState } from 'react'

export default function RaiseGraph () {
    const [firstValue, setFirstValue] = useState(750000)
    const [secondValue, setSecondValue] = useState(2000000)
    
    const {handleRaiseValues, raiseValues} = useContext(Context)
    

   

    return (
     
        <div id="card-area"> 
        <p></p>
       

          
        </div>
      
    )
}