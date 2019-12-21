import React from 'react'

export default function Image(props) {
    return (
        <div className="col-6 col-sm-3 p-3 text-center">
            <div className="card">
                <img className="m-3 img-fluid align-self-center PixImage" src={props.Large} alt="" /> 
                    <div className="card-footer">
                        <small>Author: <strong>{props.Author}</strong></small>
                            <p className="fa-sm">Downloads: {props.Downloads} </p>
                        <button className="btn btn-success align-self-end m-2" href={props.Large} onClick={() =>window.open(props.Large,'_blank')}><i className="fas fa-file-download" /></button>
                    </div>
            </div>
        </div>
    )
}
