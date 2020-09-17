import React, {useState} from 'react'
import Player from '../../components/Player';
import Albuns from '../../components/Albuns';
import MusicList from '../../components/MusicList';
import { IAlbuns, IMusic } from '../../config/interfaces/interfaces'
import axios from 'axios'

function Home() {
    const [background, setBackground] = useState('#12142b')
    const [musicList, setMusicList] = useState<Array<IMusic> | undefined>([])

    const setAlbum = (album :IAlbuns) => {
        getMusicList(album.id)
        setBackground(album.color)
    }

    const getMusicList = async (id: Number) => {
        try {
            let response = await axios.get('/api/getMusicList')
            setMusicList(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ height: '100vh', backgroundColor: '#12142b', padding: 20}}>
            <Albuns callback={(album) =>  setAlbum(album)}/>
            <MusicList list={musicList} />
            <footer>
                <Player color={background} />
            </footer>
        </div>
    )
}

export default Home