import React from 'react'
import './Icon.css'
import {ducks} from '../../tools/duckTools'

const duckImage = (type) => require(`../../images/ducks/${type}.png`);
const types = {
    canvasback:duckImage("canvasback"),
    gadwall:duckImage("gadwall"),
    "lesser scaup":duckImage("lesser scaup"),
    mallard:duckImage("mallard"),
    redhead:duckImage("redhead")
};

export const Icon = ({type, name}) => {
    const image = ducks[type] ? ducks[type].image : null;
    return (
        <div className="icon-container">
            <img className="icon" src={image}></img>
            {name && <div className="name">{name}</div>}
        </div>
    );
}

// src={types['gadwall']}