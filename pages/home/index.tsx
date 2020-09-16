import React, {useState} from 'react'
import Player from '../../components/Player';
import Albuns from '../../components/Albuns';


function Home() {
    const [background, setBackground] = useState('#12142b')

    const changeBackground = (color :string) => {
        setBackground(color)
    }

    return (
        <div style={{ height: '100%', backgroundColor: '#12142b', padding: 20}}>
            <Albuns callback={(color) =>  changeBackground(color)}/>
            <Player color={background} />
        </div>
    )
}

export default Home