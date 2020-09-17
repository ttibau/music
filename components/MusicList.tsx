import React from 'react'
import { IMusicList } from '../config/interfaces/interfaces'

const MusicList = (props : IMusicList) => {
    return (
        <>
            <h1 style={{ color: '#FFFFFF'}}>Sons</h1>
            {/* LISTA */}
            <div>
                {props.list.map(music => (
                    <div key={music.id.toString()} style={{ display: 'flex', flexDirection: 'row', height: 90}}>
                        <img width={50} height={50} src={music.image} alt={music.title} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default MusicList