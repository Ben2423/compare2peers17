import {Context} from '../utils/providers/context'
import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { formatPrice } from '../utils/providers/index';

export default function RaiseGraph () {
    const [firstValue, setFirstValue] = useState(750000)
    const [secondValue, setSecondValue] = useState(3000000)
    let firstValueUsd = formatPrice(firstValue)
    let secondValueUsd = formatPrice(secondValue)
    
    const {handleRaiseValues, raiseValues} = useContext(Context)
    
    function handleOnChange1(e) {
        //setUSDFirstValue(handleCurrency1({firstValue}))
        setFirstValue(e.target.value)
        let min = parseInt(e.target.value, 10)
        handleRaiseValues(min, raiseValues[1])
      
    }

    function handleOnChange2(e) {
        //setUSDSecondValue(handleCurrency2({secondValue}))
        setSecondValue(e.target.value)
        let max = parseInt(e.target.value, 10)
        handleRaiseValues(raiseValues[0], max)
    }

    
    const Output = styled.output`
    display: inline-block;
    position: absolute;
    color: white;
    padding: .5em;
    top: 20px;
  `
  function findLeftPosition(actualValue, min, max){
    let value = parseInt(actualValue, 10),
    minValue = min, 
    maxValue = max
    const newVal = Number(((value - minValue) * 100) / (maxValue - minValue));
    const left = `calc(${newVal}% + (${- 35 - newVal * 0.15}px))`
    return left
  }


    return (
     
        <div id="card-area"> 
        <h2>Raise Goal</h2>
        <div class="input-range-area">
        <input class="range" type="range" min={50000} max={2000002} value={firstValue} onChange={handleOnChange1} tabindex="1"  />

        <Output style={{left: findLeftPosition(firstValue, 50000, 2000001)}}>
        {firstValueUsd}
        
        
        </Output>
    
       <input class="overlay-value" type="range" min={2000002} max={5000000} value={secondValue} onChange={handleOnChange2} tabindex="0"  />
       <Output id="output" style={{left: findLeftPosition(secondValue, 2000002, 5000000)}}>
       {secondValueUsd}

    

       </Output>
     
       </div>

          
        </div>
      
    )
}