import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pet-clinic-standalone';
  menu: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.menu = [
      {
        label: 'Owners',
        items: [
          {
            label: 'Lista',
            routerLink: '/owners',
          },
          {
            label: 'Agregar',
            routerLink: 'owners-add/-1',
          },
        ],
      },
      {
        label: 'Veterinarios',
        items: [
          {
            label: 'Lista',
            //routerLink: '/owners',
          },
          {
            label: 'Agregar',
            //routerLink: 'owners-add/-1',
          },
        ],
      },
      {
        label: 'Pet Types',
        //routerLink: '/pettypes',
      },
      {
        label: 'Specialities',
        //routerLink: '/pettypes',
      },
      {
        label: '[> Log Out',
        //routerLink: '/pettypes',
      },
    ];
  }
}
