import { combineReducers } from 'redux';
import pokemonList from './pokemonReducers';
import search from './searchReducer';

export default combineReducers({
    pokemonList, search
})