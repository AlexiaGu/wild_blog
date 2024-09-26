import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  //  template: '<h1>"hello you"</h1>',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'Alexia';
  articles = [
    {
      title: 'Angular 16: Les nouveautés',
      author: 'Alice',
      content: "Les nouveautés d'Angular 16 incluent...",
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 100,
    },
    {
      title: 'Développer une API REST',
      author: 'Bob',
      content: 'Développer une API REST nécessite...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: '',
      likes: 160,
    },
    {
      title: 'Pourquoi TypeScript est essentiel ?',
      author: 'Charlie',
      content: 'TypeScript apporte de la robustesse...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: '',
      likes: 200,
    },
  ];
  togglePublish(article: any): void {
    article.isPublished = !article.isPublished;
  }

  get publishedArticles() {
    return this.articles.filter((article) => article.isPublished);
  }
}
