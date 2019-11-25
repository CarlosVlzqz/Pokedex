import React from 'react'

import './scss/ListItem.scss';

function ListItem(props) {

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-2" >
                    <div className="pokemon-card">
                        <img src={props.sprite} className="" alt={props.name} />
                        <h5 className="title">{props.name}</h5>
                            {props.types.map(({ type }, index) => (
                                <img key={index} src={require(`../assets/badges/${type.name}.png`)} alt={`${props.name}`} className="" />
                            ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ListItem;