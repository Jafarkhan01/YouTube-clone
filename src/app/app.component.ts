import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesComponent } from "./pages/pages.component";

@Component({
  selector: 'app-root',
  imports: [PagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'YouTube-clone';
}
