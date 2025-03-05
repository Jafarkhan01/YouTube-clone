import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Post {
  imageUrl: string;
  avatarUrl: string;
  userName: string;
  date: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  posts: Post[] = [
    {
      imageUrl: './assets/content/DALL·E 2024-09-04 14.11.41 - A surreal alien landscape in space. The scene features a barren, jagged surface of an alien planet surrounded by rings of asteroids and ice. A massive.webp',
      avatarUrl: './assets/You.svg',
      userName: 'User Name',
      date: 'Posted on September 4, 2024'
    },
    {
      imageUrl: './assets/content/DALL·E 2024-09-04 14.11.41 - A surreal alien landscape in space. The scene features a barren, jagged surface of an alien planet surrounded by rings of asteroids and ice. A massive.webp',
      avatarUrl: './assets/You.svg',
      userName: 'User Name',
      date: 'Posted on September 4, 2024'
    }
  ];

}
