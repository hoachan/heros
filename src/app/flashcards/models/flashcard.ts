import { Image, generateMocImage } from "./image";

export interface Flashcard {
    id : string,
    title : string,
    category : string,
    tags : string,
    image : Image,
    list : [FlashcardContent]
}

export interface FlashcardContent {
    id : string,
    index : number,
    frontend : string,
    backend : string,
    image : Image,
    image_view_at : number,
    image_view_auto : boolean,
}

export function generateFlashcardContent(): FlashcardContent{
    return {
        id : '',
        index : 1,
        frontend : '',
        backend : '',
        image : generateMocImage(),
        image_view_at : 0,
        image_view_auto: true,
    }
}