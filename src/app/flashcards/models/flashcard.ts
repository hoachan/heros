import { Image, generateMocImage } from "./image";

export interface Flashcards {
    id : string,
    title : string,
    category : string,
    tags : string,
    image : Image,
    listCards : Flashcard[],
}

export interface Flashcard {
    id : string,
    index : number,
    frontend : string,
    backend : string,
    image : Image,
    image_view_at : number,
    image_view_auto : boolean,
}

export function generateFlashcardContent(): Flashcard{
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