import React from 'react'

import { useDispatch } from 'react-redux'
import { removeFromList } from '../store/actionCreators'

import './scss/ListItem.scss';

function ListItem(props) {

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <div className="row">
                <div className="pokemon-card">
                    <button className="button button-delete" onClick={ () => dispatch(removeFromList(props.name)) } > <span role="img" aria-label="delete"> ❌</span></button>
                    <img src={ props.sprite } className="pokemon-img" alt={ props.name } />
                    <h5 className="title">{ props.name }</h5>
                    { props.types.map(
                        ({ type }, index) => (
                            <img key={ index } src={require(`../assets/badges/${type.name}.png`)} alt={`${ props.name }`} className="" />
                        )
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ListItem;