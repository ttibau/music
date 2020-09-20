import React, { useState } from 'react'
import { IMenuItem } from '../config/interfaces/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuItem = (props : IMenuItem) => {
    const [hover, setHover] = useState(false)
    return (
        <div 
            style={{ 
                padding: 20, 
                backgroundColor: hover ? 'rgba(0, 0, 0, 0.4)' : null,
                borderRadius: 7,
                cursor: hover ? 'pointer' : 'default'
            }} 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)
        }>
            <a style={{ color: '#FFFFFF'}}>
                <FontAwesomeIcon 
                    icon={props.icon}
                    style={{ marginRight: 10}}
                />
                {props.title}
            </a>
        </div>
    )
}

export default MenuItem