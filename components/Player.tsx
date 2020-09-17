import React, { useEffect, useRef } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import { useSelector } from 'react-redux'

interface IPlayer {
    path: string,
    color: string
}

const Player = (props: IPlayer) => {
    const sound = useSelector(state => state.sound)
    const player = useRef()

    useEffect(() => {
        if(sound)
            player?.current?.audio.current.play()
    }, [sound])

    return (
        <div style={{ backgroundColor: props.color}}>
                <AudioPlayer
                    ref={player}
                    style={{ height: 100 }}
                    src={sound ? sound.path : null}
                    onPlay={e => console.log("onPlay")}
                    onEnded={e => console.log('ACABOU', e)}
                />
        </div>
    )
}

Player.defaultProps = { path: 'asdf'}

export default Player