import { Component, inject } from '@angular/core';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleThumbnailComponent, CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent {
  private apiService = inject(ApiService);
  articles$!: Observable<Article[]>;

  public messageFromChild = '';

  ngOnInit(): void {
    this.articles$ = this.apiService.getArticles();
  }

  dataRecieveFromChild(message: string): void {
    this.messageFromChild = message;
    console.log(this.messageFromChild);
  }

  togglePublication(article: Article): void {
    article.isPublished = !article.isPublished;
    console.log(article.isPublished);
  }
}
