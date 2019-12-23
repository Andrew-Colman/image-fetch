import React from 'react'
import {useSpring, animated} from 'react-spring'



export default function Image(props) {

    const [prop, set] = useSpring(() => ({ shadow: 0,opacity: 0.9, config: { mass: 1, tension: 170, friction: 26 } }))

    return (
        <div className="col-6 col-sm-3 p-3 text-center">
            <animated.div className="card">
                <img className="m-3 img-fluid align-self-center PixImage" src={props.Large} alt="" /> 
                    <div className="card-footer">
                        <small>Author: <strong>{props.Author}</strong></small>
                            <p className="fa-sm">Downloads: {props.Downloads} </p>
                        <button className="btn btn-success align-self-end m-2" href={props.Large} onClick={() =>window.open(props.Large,'_blank')}><i className="fas fa-file-download" /></button>
                    </div>
            </animated.div>
        </div>
    )
}
