import AudioPlayer from 'react-h5-audio-player';

interface IPlayer {
    path: string,
    color: string
}

const Player = (props: IPlayer) => {
    return (
        <div style={{ backgroundColor: props.color}}>
            <AudioPlayer
                style={{ height: 100 }}
                src="https://www.myinstants.com/media/sounds/ai-pai-para-hihi.mp3"
                onPlay={e => console.log("onPlay")}
            />
        </div>
    )
}

Player.defaultProps = { path: 'asdf'}

export default Player