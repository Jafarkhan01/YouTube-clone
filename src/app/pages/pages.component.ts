import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { ShortsComponent } from "./shorts/shorts.component";

@Component({
  selector: 'app-pages',
  imports: [NavBarComponent, HeaderComponent,  ShortsComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
