export class ImageInfo {
    models : Image[];
    paging : Paging;
}

export class Image {
    id : string;
    title : string;
    tags : string;
    category : string;
    thirdPartyId : string;
    license : number;
    width : number;
    height : number;
    url : string;
    small_thumbnail_url : string;
}

export class Paging {
    page : number;
    perPage : number;
    token : string;
    total : number;
}

export function generateMocImage() : Image {
    return {
        id : '1',
        title : 'football',
        tags : 'hoa chan',
        category : '1',
        thirdPartyId : '20180116',
        license : 1,
        width : 180,
        height : 180,
        url : 'https://farm3.staticflickr.com/2447/3889973492_04f8690fb9_m.jpg',
        small_thumbnail_url : null
    }

}

export function generateMocPaging() : Paging {
    return {
        page : 1,
        perPage : 3,
        token : 'kadhfuelfnzlffkzfsdlkfj343klsf',
        total : 50
    }
}