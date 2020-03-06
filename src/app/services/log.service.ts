import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  loglevel = 'debug';

  constructor() {
    console.log('### INIT LogService');
  }

  debug(content: string) {
    if (this.loglevel === 'debug') {
      console.log(content);
    }
  }

  info(content: string) {
    if (this.loglevel === 'debug' || this.loglevel === 'info') {
      console.log(content);
    }
  }

  error(content: string) {
    if (this.loglevel === 'debug' || this.loglevel === 'info' || this.loglevel === 'error') {
      console.error(content);
    }
  }
}
