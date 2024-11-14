import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss',
})
export class ArticleThumbnailComponent {
  @Input() article!: Article;
  @Output() dataEmitFromChild: EventEmitter<string> =
    new EventEmitter<string>();

  router: Router = inject(Router);
  newCommentList: string[] = [];

  sendDataToParent() {
    this.article.likes++;
    this.dataEmitFromChild.emit(
      `l'article "${this.article.title}" vient d'être liké`
    );
  }

  goToArticleDetails(articleId: number, articleTitle: string) {
    this.router.navigate(['/article', articleId, articleTitle]);
  }

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

  onSubmit() {
    this.newCommentList.push(this.article.comment);
    this.article.comment = '';
  }
}
