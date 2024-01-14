import React, {useState} from "react";
import './SearchBar.css'

export const SearchBar = (props) => {
    const {locQuery, setLocQuery, locDisplay, setLocDisplay, isMetric, setIsMetric} = props
    const [input, setInput] = useState('')

    const placeHolder = '\u2315'

    function handleChange(e) {
        if(e.target.value != '') {
            console.log(e.target.value)
            setInput(e.target.value)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('submitting', event.target)
        setLocQuery(input)
    }

    function handleToggle(e) {
        e.preventDefault()
        setIsMetric(e.target.checked)
    }

    return(
        <div className="bar-and-metric">

            <form onSubmit={handleSubmit} className="search-form">
                <div className="searchbar">
                    <input placeholder={placeHolder} id="searchInput" onChange={handleChange}></input>
                    <button type="submit" className="search-button">go</button>
                </div>
            </form>
            <div className="switch-metric">
                <label className="switch">
                    <input type="checkbox" checked={isMetric} id="forecast-toggle" onChange={handleToggle}/>
                    <span className="slider">{'metric?'}</span>
                </label>
            </div>
        </div>
    )
}