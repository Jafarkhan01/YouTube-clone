import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { HeaderComponent } from "../header/header.component";
import { HomeComponent } from "./home/home.component";
import { ShortsComponent } from "./shorts/shorts.component";
import { SubscriptionsComponent } from "./subscriptions/subscriptions.component";
import { TrendingComponent } from "./trending/trending.component";
import { GamingComponent } from "./gaming/gaming.component";
import { MusicComponent } from "./music/music.component";
import { LiveComponent } from "./live/live.component";
import { SportComponent } from "./sport/sport.component";
import { EducationComponent } from "./education/education.component";

@Component({
  selector: 'app-pages',
  imports: [HeaderComponent, EducationComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
