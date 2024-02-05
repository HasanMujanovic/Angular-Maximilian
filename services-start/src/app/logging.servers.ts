import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingServiceTo {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
