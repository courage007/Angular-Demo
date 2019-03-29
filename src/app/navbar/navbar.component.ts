import { Component, OnInit } from '@angular/core';
import { APP_ROUTE_PATH } from '../app-routing-path';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  private navbarItems: Array<NavbarItem>;

  constructor() { }

  ngOnInit() {
    this.navbarItems = [
      /* tslint:disable:no-use-before-declare */
      new NavbarItem('英雄列表（hero list）', APP_ROUTE_PATH.heroes),
      /* tslint:enable: no-use-before-declare */
    ];
  }
}

class NavbarItem {
  constructor(public itemName: string, public itemLink: string) {}
}
