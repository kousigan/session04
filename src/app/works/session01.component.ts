import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'session04',
  template: `
    <p>
      session01 Works!
    </p>

    <p><a [routerLink]="['/works/']">go back  </a></p>
  `,
  styles: []
})
export class Session01Component implements OnInit {

  constructor(   ) {}

  ngOnInit() {
  }


}
