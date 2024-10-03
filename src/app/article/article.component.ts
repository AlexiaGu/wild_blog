import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../models/article.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  @Input() articles: Article[] = [];

  togglePublication(article: Article): void {
    article.isPublished = !article.isPublished;
  }
  // pour récuperer le typage provenant du fichier article.models.ts
  //  article: ArticleBis = {
  //   title: "Titre de l'article",
  //   author: 'John Doe',
  //   content: "Voici le contenu de l'article.",
  //   image: 'https://via.placeholder.com/350x150',
  //   isPublished: true,
  //   comment: '',
  // };
  // //évite une erreur indiquant que la propriété comment n'existe pas
  // comment: string = '';
}
