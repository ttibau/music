import React, { useEffect, useRef } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import { useSelector } from 'react-redux'

interface IPlayer {
    path: string,
    color: string
}

interface IHeader {
    title: string
}

const Header = (props : IHeader) => {
    return (
        <span>{props.title}</span>
    )
}

const Player = (props: IPlayer) => {
    const sound = useSelector(state => state.sound)
    const player = useRef()

    useEffect(() => {
        if(sound)
            player?.current?.audio.current.play()
    }, [sound])

    return (
        <div style={{ backgroundColor: props.color, position: 'absolute', bottom: 0, width: '100%'}}>
                <AudioPlayer
                    ref={player}
                    style={{ height: 120 }}
                    src={sound ? sound.path : null}
                    onPlay={e => console.log("onPlay")}
                    onEnded={e => console.log('ACABOU', e)}
                    showSkipControls={true} 
                    showJumpControls={false}
                    header={<Header title={sound ? sound.title : null} />}
                />
        </div>
    )
}

Player.defaultProps = { path: 'asdf'}

export default Player