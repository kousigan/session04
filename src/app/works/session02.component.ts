import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-session02',
  template: `
    <p>
      session02 Works!
    </p>
    <p><a [routerLink]="['/works/']">go back  </a></p>
  `,
  styles: []
})
export class Session02Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
