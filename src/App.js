import React, { useEffect } from 'react';
import List from './components/List'
import Searchbar from './components/NavBar'

import { useDispatch, useSelector } from 'react-redux'
import { addList, setSearch } from './store/actionCreators'

function App() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.pokemonList.list)
  const search = useSelector((state) => state.search.search)

  useEffect(() => {
    if(search !== ''){
      fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}/`).then(function (response) {
        if(response.status !== 200) window.alert("We couldn't find that pokemon") 
        return response.json();
      }).then((data) => {
        dispatch(addList({
          name: data.name,
          sprite: data.sprites.front_default,
          types: data.types,
        }))
      })
    }
  }, [search, dispatch]);

  return (
    <div className="App">
      <Searchbar submit={ (search) => dispatch(setSearch(search)) }></Searchbar>
      {
        result.length > 0 ? <List items={result} ></List> : <h4 className="empty-list" >Search for a Pokemon in the Searchbar</h4>
      }
    </div>
  );
}

export default App;
