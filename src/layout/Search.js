import React from 'react'

export default function Search(props) {
    return (
        <div className="row mt-2">
        <div id="search" className="col bg-dark text-center text-white">
        {props.children}
        <hr />
        </div>
        </div>
    )
}
