import React from 'react'
import ListItem from './ListItem'

import './scss/List.scss';

function List(props) {

    const items = props.items
    return (
        <div>
            {
                items.map(function (item, index) {
                    return <ListItem key={index} {...item}  ></ListItem>
                })
            }
        </div>
    )
}

export default List;