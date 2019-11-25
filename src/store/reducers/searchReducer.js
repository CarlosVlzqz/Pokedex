const initialState =  {
    search: ''
}

const pokemonList = (state = initialState, action) => {
    switch(action.type){
        case 'SET_SEARCH':
            state.search = action.payload.id
            return state
        default:
            return state;
    }
}

export default pokemonList;