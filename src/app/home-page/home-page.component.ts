import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Article } from '../models/article.model';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    ContactFormComponent,
    ArticleComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  // messageToChild: string = 'Bonjour depuis le parent !';
  articles: Article[] = [
    {
      id: 1,
      title: 'Angular 16: Les nouveautés',
      author: 'Alice',
      content: "Les nouveautés d'Angular 16 incluent...",
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 100,
    },
    {
      id: 2,
      title: 'Développer une API REST',
      author: 'Bob',
      content: 'Développer une API REST nécessite...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 160,
    },
    {
      id: 3,
      title: 'Pourquoi TypeScript est essentiel ?',
      author: 'Charlie',
      content: 'TypeScript apporte de la robustesse...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
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
