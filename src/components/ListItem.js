import React from 'react'

function ListItem(props) {

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-6" align="center">
                    <div className="col-md-8" >
                        <div className="card">
                            <img src={props.sprite} className="card-img-top" alt={props.name} />
                            <hr />
                            <div className="card-body">
                                <h5 className="card-title">{props.name}</h5>
                                <div className="row" >
                                    {props.types.map(({ type }, index) => (
                                        <img key={index} src={require(`../assets/badges/${type.name}.png`)} alt={`${props.name} type badge`} className="card-img-top" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8" >
                        <button className="button btn btn-danger" type="button">Add to my Team</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ListItem;