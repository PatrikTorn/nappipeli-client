import React from 'react'
import {default as ReactLoader} from 'react-loader-spinner';

export const Loader = () => {
    return (
        <ReactLoader
            type="Puff"
            color="#00BFFF"
            height="100"
            width="100"
        />
    )
}