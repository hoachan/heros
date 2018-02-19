import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

import { FcDialogSearchImgComponent } from './fc-dialog-search-img.component';

interface confirmData {
  title?: string,
  message?: string
}

@Injectable()
export class FcDialogSearchImgService {

  constructor(private dialog: MatDialog) { }

  public confirm(data:confirmData = {}): Observable<boolean> {
    data.title = data.title || 'Confirm';
    data.message = data.message || 'Are you sure?';
    let dialogRef: MatDialogRef<FcDialogSearchImgComponent>;
    dialogRef = this.dialog.open(FcDialogSearchImgComponent, {
      width: '70%',
      disableClose: true,
      data: {title: data.title, message: data.message}
    });
    return dialogRef.afterClosed();
  }
}