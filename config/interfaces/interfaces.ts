export interface IAlbuns {
    id?: Number,
    picture?: string, 
    year?: string, 
    title?: string,
    color?: string,
    callback?: (album: IAlbuns) => void
}

export interface IMusicList {
    list: Array<IMusic>
}

export interface IMusic {
    id: Number,
    title: string, 
    path: string, 
    image: string,
}