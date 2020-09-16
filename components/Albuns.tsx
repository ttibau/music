import React from 'react'

interface IAlbuns {
    picture?: string, 
    year?: string, 
    title?: string,
    color?: string,
    callback?: (color: string) => void
}

const Albuns = (props : IAlbuns) => {

    const fakeData : Array<IAlbuns> = [
        {picture: 'https://via.placeholder.com/150', year: '2020', title: 'Meu pau de capa', color: '#6c65b4'},
        {picture: 'https://via.placeholder.com/150', year: '2020', title: 'Alow', color: '#BF69B2'}
    ]

    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 15}}>
            {fakeData.map((album, index) => (
                <div onClick={() => props.callback(album.color)} key={index} style={{ display: 'flex', flexDirection: 'column', marginLeft: index === 0 ? null : 25}}>
                    <img src={album.picture} alt={album.title} style={{ borderRadius: 5, width: 150, height: 150 }} />
                    <span style={{ marginTop: 10, color: '#FFFFFF'}}> { album.title } </span>
                    <span style={{ marginTop: 5, color: '#FFFFFF', fontSize: 10}}>{ album.year }</span>
                </div>
            ))}
        </div>
    )
}

export default Albuns