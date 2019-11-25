export const addList = ({ name, sprite, types }) => ({
    type: 'ADD_TO_LIST',
    payload: {
        name,
        sprite,
        types
    }
})

export const setSearch = (id) => ({
    type: 'SET_SEARCH',
    payload: {
        id
    }
})

