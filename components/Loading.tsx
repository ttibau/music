import React from 'react'
import { ILoading } from '../config/interfaces/interfaces'

const Loading = (props : ILoading) => {
    return (
        <>
            <div className="loading">
            <div className="bounceball"></div>
            <div className="text">NOW LOADING</div>
            </div>
        </>
    )
}

export default Loading