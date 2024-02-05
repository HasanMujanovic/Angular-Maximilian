import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p>This is warning message</p>`,
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class WarningAlert {}
