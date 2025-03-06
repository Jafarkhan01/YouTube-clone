import { Component } from '@angular/core';

interface Shorts {
  videoUrl: string;
  likes: string;
  dislikes: string;
  comments: string;
  shares: string;
  mores:string;
}

@Component({
  selector: 'app-shorts',
  imports: [],
  templateUrl: './shorts.component.html',
  styleUrl: './shorts.component.scss'
})
export class ShortsComponent {
  shorts: Shorts[] = [
    {
      videoUrl: './assets/content/18. Замок Химэдзи.jpg',
      likes: '👍',
      dislikes: '👎',
      comments: '💬',
      shares: '🔗',
      mores: '👌'
    },
    {
      videoUrl: './assets/content/18. Замок Химэдзи.jpg',
      likes: '👍',
      dislikes: '👎',
      comments: '💬',
      shares: '🔗',
      mores: '👌'
    }
  ];

}
