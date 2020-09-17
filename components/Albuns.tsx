import React, { useEffect } from 'react'
import { IAlbuns } from "../config/interfaces/interfaces";

const Albuns = (props : IAlbuns) => {

    return (
        <div>
            <h1 style={{ color: '#FFFFFF'}}>PLAYLISTS</h1>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 15}}>
                {props.list.map((album, index) => (
                    <div onClick={() => props.callback(album)} key={album._id} style={{ display: 'flex', flexDirection: 'column', marginLeft: index === 0 ? null : 25}}>
                        <img src={album.picture} alt={album.title} style={{ borderRadius: 5, width: 150, height: 150 }} />
                        <span style={{ marginTop: 10, color: '#FFFFFF'}}> { album.title } </span>
                        <span style={{ marginTop: 5, color: '#FFFFFF', fontSize: 10}}>{ album.year }</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Albuns