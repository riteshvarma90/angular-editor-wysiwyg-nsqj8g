import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from './nav-item';
 

@Component({
  selector: 'app-menu-item',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  @Input() items: NavItem[];

  public childMenu;
  constructor() {
  }


  ngOnInit() {
  }
  navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'close',
      children: [
        {
          displayName: 'Home',
          iconName: 'Home',
          children: [
            {
              displayName: 'Home',
              iconName: 'person',
              route: 'Home',

            }
          ]
        }
      ]
    }
    ,{
      displayName: 'Country Page',
      iconName: 'close',
      children: [
        {
          displayName: 'Search',
          iconName: 'Home',
          children: [
            {
              displayName: 'Home',
              iconName: 'person',
              route: 'Home',

            }
          ]
        }
      ]
    } 
    ];

}