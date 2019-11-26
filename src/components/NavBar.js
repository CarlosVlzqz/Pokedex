import React, { useState } from 'react'
import './scss/NavBar.scss';

function SearchBar(props) {

    const [inputValue, setInputValue] = useState('')

    return (
        <div className="searchbar">
            <span>Search by name or Id:</span>
            <nav>
                <input className="" type="text" placeholder="Type here..." onChange={ (e) => setInputValue(e.target.value) } />
                <button className="button button-red" onClick={ () => props.submit(inputValue) }>Search</button>
            </nav>
        </div>
    )
}

export default SearchBar;