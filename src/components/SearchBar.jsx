import React, {useState} from "react";
import './SearchBar.css'

export const SearchBar = (props) => {
    const {locQuery, setLocQuery, locDisplay, setLocDisplay} = props
    const [input, setInput] = useState('')

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('submitting', input)
        setLocQuery(input)
    }

    return(
        <form onSubmit={handleSubmit} className="search-form">
            <input placeholder={'Somewhere Else?'} id="searchInput" onChange={handleChange}></input>
            <button type="submit" className="search-button" >go</button>
        </form>
    )
}