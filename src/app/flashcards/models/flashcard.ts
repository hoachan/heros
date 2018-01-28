export interface Flashcard {
    id : string,
    volumeInfo : {
        title       : string,
        subtitle    : string,
        description : string,
        publishMode : string,
        publishDate : string,
        imageLinks  : {
            thumbnail       : string,
            smallThumbnail  : string
        }
    }
}