import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleListComponent } from '../../components/article-list/article-list.component';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ArticleListComponent, HttpClientModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  articles$!: Observable<Article[]>;

  private router: Router = inject(Router);
  private http: HttpClient = inject(HttpClient);

  ngOnInit() {
    this.articles$ = this.getArticles();
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  goToArticlePage(articleId: number) {
    this.router.navigate(['/article', articleId]);
  }

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }
}
