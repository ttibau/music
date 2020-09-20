import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IAlbuns {
    _id?: string,
    picture?: string, 
    year?: string, 
    title?: string,
    color?: string,
    callback?: (album: IAlbuns) => void
    list: Array<IAlbuns>
}

export interface IMusicList {
    list: Array<IMusic>
}

export interface IMusic {
    _id: string,
    title: string, 
    path: string, 
    image: string,
}

export interface IMenuItem {
    title: string,
    icon : IconDefinition,
    active?: boolean
}

export interface ILoading {
    title: string, 
    color: string
}