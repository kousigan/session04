import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-workshome',
  template: `
    <p>
      <a [routerLink]="['/works/session01']">Session 01 </a></p>
      <p><a [routerLink]="['/works/session02']">Session 02 </a></p>
      <p><a [routerLink]="['/works/session03']">Session 03 </a>
    </p>
  `,
 
})
export class WorkshomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
