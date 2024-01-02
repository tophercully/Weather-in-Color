import React, {useState} from "react";
import './SearchBar.css'

export const SearchBar = (props) => {
    const {locQuery, setLocQuery, locDisplay, setLocDisplay} = props
    const [input, setInput] = useState('')

    const placeHolder = '\u2315'

    // if(input == '') {
    //     document.getElementById('searchInput').style = font-size='10rem'
    // }

    function handleChange(e) {
        if(input != '') {
            setInput(e.target.value)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('submitting', input)
        setLocQuery(input)
    }

    return(
        <form onSubmit={handleSubmit} className="search-form">
            <div className="searchbar">
                <input placeholder={placeHolder} id="searchInput" onChange={handleChange}></input>
                <button type="submit" className="search-button" >go</button>
            </div>
        </form>
    )
}