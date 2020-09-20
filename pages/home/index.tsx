import React, {useState, useEffect} from 'react'
import Player from '../../components/Player';
import Albuns from '../../components/Albuns';
import MusicList from '../../components/MusicList';
import Sidebar from '../../components/Sidebar';
import { IAlbuns, IMusic } from '../../config/interfaces/interfaces'
import axios from 'axios'

declare module 'axios' {
    export interface AxiosRequestConfig {
      id: string;
    }
}

function Home() {
    const [background, setBackground] = useState('#12142b')
    const [musicList, setMusicList] = useState<Array<IMusic> | undefined>([])
    const [albunsList, setAlbunsList] = useState<Array <IAlbuns> | undefined>([])

    useEffect(() => {
        const getAlbunsList = async ( ) => {
            try {
                let response = await axios.get('/api/getAlbunsList')
                setAlbunsList(response.data.result)
            } catch (error) {
                console.log(error)
            }
        }
        getAlbunsList()
    }, [])

    const setAlbum = (album :IAlbuns) => {
        getMusicList(album._id)
        setBackground(album.color)
    }

    const getMusicList = async (id: string) => {
        try {
            let response = await axios.post('/api/getMusicList', { id })
            setMusicList(response.data.result)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div >
            <div style={{ backgroundColor: '#12142b', minHeight: '100vh', padding: 15 }}>
                <Sidebar/>
                <div style={{ marginLeft: 200 }}>
                    <div>
                        <Albuns list={albunsList} callback={(album) =>  setAlbum(album)}/>
                        <MusicList list={musicList} />
                    </div>
                </div>
            </div>
            <footer>
                <Player color={background} />
            </footer>
        </div>
    )
}

export default Home