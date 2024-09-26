import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  // pour récuperer le typage provenant du fichier article.models.ts
  article: Article = {
    title: "Titre de l'article",
    author: 'John Doe',
    content: "Voici le contenu de l'article.",
    image: 'https://via.placeholder.com/350x150',
    isPublished: true,
    comment: '',
  };
  //évite une erreur indiquant que la propriété comment n'existe pas
  comment: string = '';

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
