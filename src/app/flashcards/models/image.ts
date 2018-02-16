export class ImageInfo {
    models : Image[];
    paging : Paging;
}

export class Image {
    id : string;
    code : string;
    personId : string;
    timestamp : string;
    lastModified : string;
    thirdPartyId : string;
    license : number;
    width : number;
    height : number;
    _lagacyUrl : string;
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
        code : 'string',
        personId : '1',
        timestamp : '20180116',
        lastModified : '20180116',
        thirdPartyId : 'abcxyz',
        license : 1,
        width : 180,
        height : 180,
        _lagacyUrl : 'https://farm3.staticflickr.com/2447/3889973492_04f8690fb9_m.jpg',
    }

}

export function generateMocPaging() : Paging {
    return {
        page : 1,
        perPage : 3,
        token : 'sadasdfafda',
        total : 50
    }
}