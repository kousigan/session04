import { Injectable, Input, Output,EventEmitter } from '@angular/core';

@Injectable()
export class DataService {
 dataString: any;

  insertData(data) {
    this.dataString = data
  }
}
