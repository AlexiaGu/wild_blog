import { Component, inject } from '@angular/core';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleThumbnailComponent, CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent {
  private http = inject(HttpClient);
  public articles: Article[] = [];
  articleListSubscription!: Subscription;
  public messageFromChild = '';

  ngOnInit(): void {
    this.getArticles();
  }

  ngOnDestroy(): void {
    this.articleListSubscription.unsubscribe();
  }

  dataRecieveFromChild(message: string): void {
    this.messageFromChild = message;
    console.log(this.messageFromChild);
  }

  togglePublication(article: Article): void {
    article.isPublished = !article.isPublished;
    console.log(article.isPublished);
  }

  getArticles() {
    this.articleListSubscription = this.http
      .get<Article[]>('http://localhost:3000/articles')
      .subscribe((data) => {
        this.articles = data;
        console.log('Données reçus', data, this.articles);
      });
  }
}
