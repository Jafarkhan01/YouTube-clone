import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-pages',
  imports: [NavBarComponent, HeaderComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
