import React, { useState } from 'react'
import { IMusicList } from '../config/interfaces/interfaces'
import { useDispatch } from 'react-redux'

const MusicList = (props : IMusicList) => {
    const [hover, setHover] = useState(null)
    const dispatch = useDispatch()

    return (
        <div style={{ width: '40%'}}>
            <h1 style={{ color: '#FFFFFF'}}>Sons</h1>
            {/* LISTA */}
            <div>
                {props.list.map(music => (
                    <div 
                        onMouseLeave={() => setHover(null)} 
                        onMouseEnter={() => setHover(music.id)} 
                        style={{ backgroundColor: hover === music.id ? 'rgba(0, 0, 0, 0.4)' : null}} 
                        key={music.id.toString()} className="music-content"
                        onDoubleClick={() => dispatch({ type: 'PLAY_SOUND', sound: music})}
                    >
                        <img width={50} height={50} src={music.image} alt={music.title} />
                        <h4 style={{ color: '#FFFFFF', marginLeft: 10}}>{music.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MusicList