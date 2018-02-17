import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { ImageInfo, generateMocImage, generateMocPaging } from '../../models/image';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class FcSearchImgService {
  
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(
    private http : HttpClient,
  ) { }

  searchKey (str : String) : Observable<ImageInfo>{
    let modelImg = generateMocImage();
    let pag = generateMocPaging();

    let imgInfo = {
      models : [modelImg, modelImg, modelImg],
      paging : pag
    }

    return of(imgInfo);
  }
}