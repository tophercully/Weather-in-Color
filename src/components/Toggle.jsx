import React, { useState } from "react";
import "./Toggle.css"

export const Toggle = (props) => {
    const {label1, label2} = props
    const [text, setText] = useState('test')

    function handleClick() {
        if(text=='Hourly'){
            setText('Daily')
        } else {
            setText('Hourly')
        }
    }

    return(
        <label className="switch" onClick={handleClick}>
            <input type="checkbox" id="forecast-toggle"/>
            <span className="slider">{text}</span>
        </label>
    )
}