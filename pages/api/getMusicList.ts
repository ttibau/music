import { NowRequest, NowResponse } from '@vercel/node'
import { IMusic } from '../../config/interfaces/interfaces'


export default (request: NowRequest, response: NowResponse) => {
    let musicList: Array<IMusic> = [
        { id:1, path: 'https://www.myinstants.com/media/sounds/aud-20180228-wa0076.mp3', title: 'CHUPA MEU PINTO ENTÃO', image: 'https://images.pexels.com/photos/2796145/pexels-photo-2796145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
        { id:2, path: 'https://www.myinstants.com/media/sounds/untitled_45.mp3', title: 'OH O PAU QUEBRANDO', image: 'https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
    ]
    return response.json(musicList)
}