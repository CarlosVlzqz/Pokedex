import React, { useEffect } from 'react';
import List from './components/List'
import Searchbar from './components/NavBar'

import { useDispatch, useSelector } from 'react-redux'
import { addList, setSearch } from './store/actionCreators'

function App() {
  const dispatch = useDispatch();
  const result = useSelector(state => state.pokemonList.list)
  const search = useSelector(state => state.search.search)
  // const [result, setResults] = useState([])
  useEffect(() => {
    if(search !== ''){
      fetch(`https://pokeapi.co/api/v2/pokemon/${search}/`).then(function (response) {
        return response.json();
      }).then((data) => {
        dispatch(addList({
          name: data.name,
          sprite: data.sprites.front_default,
          types: data.types
        }))
        // setResults(newData)
      })
    }
  }, [search, dispatch]);

  return (
    <div className="App">
      <Searchbar submit={search => dispatch(setSearch(search))}></Searchbar>
      <List items={result} ></List>
    </div>
  );
}

export default App;
