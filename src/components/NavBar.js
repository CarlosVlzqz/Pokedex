import React, {useState} from 'react'

function SearchBar(props) {

    const [inputValue, setInputValue] = useState('')

    return (
        <div>
            <nav className="navbar navbar-danger bg-danger">
                <span>Pokédex</span>
                <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Name or Number" onChange={e => setInputValue(e.target.value)} />
                    <button className="btn btn-outline-dark my-2 my-sm-0" onClick={() => props.submit(inputValue)}>Search</button>
                </form>
            </nav>
        </div>
    )
}

export default SearchBar;