import React, {useState} from 'react'

function SearchBar(props) {

    const [inputValue, setInputValue] = useState('')

    return (
        <div>
            <nav className="">
                <span>Pokédex</span>
                <form className="" onSubmit={(e) => e.preventDefault()}>
                    <input className="" type="search" placeholder="Name or Number" onChange={e => setInputValue(e.target.value)} />
                    <button className="" onClick={() => props.submit(inputValue)}>Search</button>
                </form>
            </nav>
        </div>
    )
}

export default SearchBar;