import React from 'react'
import ListItem from './ListItem'

import './scss/List.scss';

function List(props) {

    const items = props.items
    return (
        <div className="row">
            {
                items.map(function (item, index) {
                    return (
                        <div className="col-md-3" key={ index }>
                            <ListItem { ...item }  ></ListItem>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List;