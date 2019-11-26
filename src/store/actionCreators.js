export const addList = ({ name, sprite, types }) => ({
    type: 'ADD_TO_LIST',
    payload: {
        name,
        sprite,
        types,
    }
})

export const setSearch = (id) => ({
    type: 'SET_SEARCH',
    payload: {
        id,
    }
})

export const removeFromList = (name) => ({
    type: 'REMOVE_FROM_LIST',
    payload: {
        name,
    }
})

