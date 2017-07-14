import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-session03',
  template: `
    <h3>Routing Child Components   </h3>
    <p>In order to route child elements, we need to add parameters to the parent routing path.</p>

    <p>for detailed example, please visit this <a href="https://coryrylan.com/blog/introduction-to-angular-routing">link</a>.</p>
    <p><a [routerLink]="['/works/']">go back  </a></p>
  `,
  styleUrls:['works.component.css']
})
export class Session03Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
