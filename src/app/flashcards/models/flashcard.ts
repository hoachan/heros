import { Image } from "./image";

export interface Flashcard {
    id : string,
    title : string,
    category : string,
    tags : string,
    image : Image,
    list : FlashcardContent
}

export interface FlashcardContent {
    id : string,
    index : number,
    frontend : string,
    backend : string,
    image : Image,
    image_view_at : string,
    image_view_auto : boolean,
}