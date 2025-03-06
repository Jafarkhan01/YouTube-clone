import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { ShortsComponent } from "./shorts/shorts.component";
import { SubscriptionsComponent } from "./subscriptions/subscriptions.component";
import { TrendingComponent } from "./trending/trending.component";
import { GamingComponent } from "./gaming/gaming.component";

@Component({
  selector: 'app-pages',
  imports: [NavBarComponent, HeaderComponent, TrendingComponent, HomeComponent, ShortsComponent, SubscriptionsComponent, GamingComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
