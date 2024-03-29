const initialState =  {
    list: []
}

const pokemonList = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_LIST':
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        name: action.payload.name,
                        sprite: action.payload.sprite,
                        types: action.payload.types
                    }
            ]
        };
        case 'REMOVE_FROM_LIST':
            return {
                ...state,
                list: state.list.filter( (item) => item.name !== action.payload.name )
            }
        default:
            return state;
    }
}

export default pokemonList;